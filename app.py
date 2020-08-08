# app.py

# ================================================================= #
# Para rodar local, abra dois terminais.
#
# No primeiro:
#   $ .\venv\Scripts\activate
#   $ serverless dynamodb start
#
# No segundo:
#   $ .\venv\Scripts\activate
#   $ serverless wsgi serve
#
# A aplicação roda em http://localhost:5000
# Quando salvar o projeto, a aplicação é atualizada automaticamente. 
# ================================================================= #

# ================================================================= #
# Para rodar na AWS, faça em um terminal:
#   $ .\venv\Scripts\activate 
#   $ serverless deploy
#
# A aplicação roda em: 
# https://on00qnj8jh.execute-api.us-east-1.amazonaws.com/dev
# Quando alterar o projeto, precisa dar deploy novamente.
# ================================================================= #

import os
import boto3
import pprint
import uuid
from flask import Flask, jsonify, request
from dynamodb_json import json_util as dynamodb_json

app = Flask(__name__)

USERS_TABLE = os.environ['USERS_TABLE']
IS_OFFLINE = os.environ.get('IS_OFFLINE')

if IS_OFFLINE:
    client = boto3.client(
        'dynamodb',
        region_name='localhost',
        endpoint_url='http://localhost:8000'
    )
else:
    client = boto3.client('dynamodb', region_name='us-east-1')


@app.route("/")
def hello():  
    return "Welcome to the IOT Garden API"

# ============================== GET ============================== #

@app.route("/usuarios/<string:login>")
def get_user(login):
    resp = client.get_item(
        TableName=USERS_TABLE,
        Key={
            'login': { 'S': login }
        }
    )
    item = resp.get('Item')
    if not item:
        return jsonify({'error': 'Usuário não encontrado'}), 404

    return dynamodb_json.loads(item)

# ================================================================= #

@app.route("/usuarios", methods=["POST"])
def create_user():
    login = request.json.get('login')
    nome = request.json.get('nome')
    if not login or not nome:
        return jsonify({'error': 'Por favor, insira login e nome'}), 400

    resp = client.put_item(
        TableName=USERS_TABLE,
        Item={
            'login': {'S': login },
            'nome': {'S': nome },
            'plantacoes': {'M': {}},
        }
    )

    return jsonify({
        'login': {'S': login },
        'nome': {'S': nome },        
    })

@app.route("/plantacoes", methods=["POST"])
def create_plantacao():
    # idUsuario = uuid.uuid4() # gera um id aleatorio
    login = request.json.get('login')
    idPlantacao = str(request.json.get('idPlantacao'))
    planta = request.json.get('planta')
    plantacao = {
        "planta": {"S": planta},
        "sensores": {"M": {}}, 
    }

    resp = client.update_item(
        TableName=USERS_TABLE,
        Key={
            'login': { 'S': login },
        },
        UpdateExpression="SET #plantacoes.#idPlantacao = :dict",
        ExpressionAttributeNames= {
            "#plantacoes": "plantacoes",
            "#idPlantacao": idPlantacao,
        },
        ExpressionAttributeValues= {
            ":dict": { "M": plantacao}
        },
        ConditionExpression='attribute_not_exists(#plantacoes.#idPlantacao)',
        ReturnValues="ALL_NEW"
    )

    return resp

@app.route("/sensores", methods=["POST"])
def create_sensor():
    # idUsuario = uuid.uuid4() # gera um id aleatorio
    login = request.json.get('login')
    idPlantacao = request.json.get('idPlantacao')
    idSensor = request.json.get('idSensor')
    tipoSensor = request.json.get('tipoSensor')
    sensor = {
        "tipoSensor": {"S": tipoSensor},
        "medicoes": {"M": {}}, 
    }

    resp = client.update_item(
        TableName=USERS_TABLE,
        Key={
            'login': { 'S': login },
        },
        UpdateExpression="SET #plantacoes.#idPlantacao.#sensores.#idSensor = :dict",
        ExpressionAttributeNames= {
            "#plantacoes": "plantacoes",
            "#idPlantacao": idPlantacao,
            "#idSensor": idSensor,
            "#sensores": "sensores",
        },
        ExpressionAttributeValues= {
            ":dict": { "M": sensor}
        },
        ConditionExpression='attribute_not_exists(#plantacoes.#idPlantacao.#sensores.#idSensor)',
        ReturnValues="ALL_NEW"
    )

    return resp

@app.route("/medicoes", methods=["POST"])
def create_medicao():
    # idUsuario = uuid.uuid4() # gera um id aleatorio
    login = request.json.get('login')
    idPlantacao = request.json.get('idPlantacao')
    idSensor = request.json.get('idSensor')
    horaMedicao = request.json.get('horaMedicao')
    medicao = dynamodb_json.dumps(dct=request.json.get('medicao'), as_dict=True)

    resp = client.update_item(
        TableName=USERS_TABLE,
        Key={
            'login': { 'S': login },
        },
        UpdateExpression="SET #plantacoes.#idPlantacao.#sensores.#idSensor.#medicoes.#horaMedicao = :dict",
        ExpressionAttributeNames= {
            "#plantacoes": "plantacoes",
            "#idPlantacao": idPlantacao,
            "#idSensor": idSensor,
            "#sensores": "sensores",
            "#medicoes": "medicoes",
            "#horaMedicao": horaMedicao
        },
        ExpressionAttributeValues= {
            ":dict": { "M": medicao}
        },
        ConditionExpression='attribute_not_exists(#plantacoes.#idPlantacao.#sensores.#idSensor.#medicoes.#horaMedicao)',
        ReturnValues="ALL_NEW"
    )

    return resp