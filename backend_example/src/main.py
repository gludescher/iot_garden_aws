from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from sqlalchemy import Column, Integer, DateTime
from flask_cors import CORS
import json 
import os
import datetime
import requests
from garden import *

# app = Flask(__name__)
# cors = CORS(app)

# basedir = os.path.abspath(os.path.dirname(__file__))
# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'garden.sqlite')
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = 'False'

# db = SQLAlchemy(app)
# ma = Marshmallow(app)

if __name__ == '__main__':
    import usuario
    import plantacao
    db.create_all()
    app.run(debug=True)