from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from sqlalchemy import Column, Integer, DateTime
from flask_cors import CORS
from garden_utils import *
import json 
import os
import datetime
import requests

if __name__ == '__main__':
    from usuario import Usuario
    from plantacao import Plantacao
    from sensor import Sensor
    db.create_all()
    app.run(debug=True)

    bla = 0