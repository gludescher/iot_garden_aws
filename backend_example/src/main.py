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

if __name__ == '__main__':
    import usuario
    import plantacao
    import sensor
    db.create_all()
    app.run(debug=True)