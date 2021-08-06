"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Admin
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required


api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend"
    }

    return jsonify(response_body), 200

@api.route('/sign_up', methods=['POST']) 
def sign_up_user():

    body_params = request.get_json()
    print(body_params)
    name = body_params.get("name", None)
    last_name = body_params.get("last_name", None)
    email = body_params.get("email", None)
    password = body_params.get("password", None)

    
    user1 = User(name=name, last_name = last_name, email=email, password=password)
    db.session.add(user1)
    db.session.commit()

    return jsonify({"msg": "El usuario fue creado exitosamente"}), 200


@api.route('/sign_in', methods=['POST']) 
def sign_in_user_b():

    body_params = request.get_json()

    email = body_params.get("email", None)
    password= body_params.get("password", None)

    if email == None or password == None:
        return jsonify({"msg": "Bad email or password"}), 401


    user= User.query.filter_by(email=email).one_or_none()
    if not user or not user.check_password(password):
        return jsonify("Tus credenciales son incorrectas, por favor intentelo nuevamente"), 401
    

    
    acces_token = create_access_token(identity=email)

    return jsonify({"acces_token": acces_token})

   #User
 # --------------------------------------------------------------------------------------------
   #Admin 

@api.route('/sign_up_admin', methods=['POST']) 
def sign_up_admin():

    body_params = request.get_json()
    print(body_params)
    name = body_params.get("name", None)
    last_name = body_params.get("last_name", None)
    email = body_params.get("email", None)
    password = body_params.get("password", None)
    tipo = body_params.get("tipo", None)
    
    user1 = Admin(name=name, last_name = last_name, email=email, password=password, tipo= tipo)
    db.session.add(user1)
    db.session.commit()

    return jsonify({"msg": "El usuario fue creado exitosamente"}), 200


