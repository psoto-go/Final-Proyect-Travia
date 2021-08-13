"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Hotel, HotelArchives, Room, Reviews, Service, Services, HotelArchives, Booking, SeedDataEmployee
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
import cloudinary
import cloudinary.uploader


api = Blueprint('api', __name__)

#Users + jwt


@api.route('/sign_up', methods=['POST']) 
def sign_up_user():

    body_params = request.get_json()
    print(body_params)
    name = body_params.get("name", None)
    last_name = body_params.get("last_name", None)
    email = body_params.get("email", None)
    password = body_params.get("password", None)
    kind = body_params.get("kind", "user")
    created_date = body_params.get("created_date", None)


    
    user1 = User(name=name, last_name = last_name, email=email, password=password, kind=kind, created_date=created_date)
    db.session.add(user1)
    db.session.commit()

    return jsonify({"msg": "El usuario fue creado exitosamente"}), 200

@api.route('/users', methods=['GET'])
def handle_hello2():
    user = User.query.all()
    response = []
    for x in user:
        response.append(x.serialize())
    
    return jsonify(response), 200

# @api.route('/allusers', methods=['GET'])
# def handle_hello():
#     user = User.query.all()
#     administrador = Administrador.query.all()
#     response = []
#     for x in user:
#         response.append(x.serialize())
#     for x in administrador:
#         response.append(x.serialize())
    
#     return jsonify(response), 200


# @api.route('/admins', methods=['GET'])
# def handle_hello3():
#     user = User.query.all()
#     administrador = Administrador.query.all()
#     response = []
#     for x in administrador:
#         response.append(x.serialize())
    
#     return jsonify(response), 200

@api.route('/sign_in', methods=['POST']) 
def sign_in_user():

    body_params = request.get_json()

    email = body_params.get("email", None)
    password = body_params.get("password", None)

    if email == None or password == None:
        return jsonify({"msg" : "Error en el email o en la contraseña"}), 401
    
    user = User.query.filter_by(email=email).one_or_none()
    # admin = Administrador.query.filter_by(email=email).one_or_none()

    if not user :
        return jsonify("Your credentials are wrong, please try again"), 401


    if user and user.check_password(password):
        access_token = create_access_token(identity=user.serialize())
        return jsonify({"access_token":  access_token, "user": user.serialize()}), 200
    
    # elif admin and admin.check_password(password):
    #     access_token = create_access_token(identity=admin.serialize())
    #     return jsonify({"access_token":  access_token, "admin": admin.serialize()}), 200
        

    return jsonify({"hola"}), 200


# @api.route('/sign_up_admin', methods=['POST']) 
# def sign_up_admin():

#     body_params = request.get_json()
#     print(body_params)
#     name = body_params.get("name", None)
#     last_name = body_params.get("last_name", None)
#     email = body_params.get("email", None)
#     password = body_params.get("password", None)
#     kind = body_params.get("kind", "admin")
    
#     user1 = Administrador(name=name, last_name = last_name, email=email, password=password, kind=kind)
#     db.session.add(user1)
#     db.session.commit()

#     return jsonify({"msg": "El usuario fue creado exitosamente"}), 200

#cloudinary

@api.route('/hotel/<int:hotel_id>/image', methods=['POST','PUT'])
def handle_upload(hotel_id):

    # validate that the front-end request was built correctly
    if 'hotel_image' in request.files:
        # upload file to uploadcare
        result = cloudinary.uploader.upload(request.files['hotel_image'])

        # fetch for the user
        hotel = Hotel.query.filter_by(id = hotel_id).one_or_none()
        if not hotel :
            return jsonify("Your hotel is not found"), 404
        # update the user with the given cloudinary image UR

        hotel_archive = HotelArchives(hotel_id = hotel.id, url= result['secure_url'])
        db.session.add(hotel_archive)
        db.session.commit()

        return jsonify(hotel_archive.serialize()), 200
    else:
        raise APIException('Missing profile_image on the FormData')

@api.route('/room/<int:room_id>/image', methods=['POST','PUT'])
def handle_upload(room_id):

    # validate that the front-end request was built correctly
    if 'room_image' in request.files:
        # upload file to uploadcare
        result = cloudinary.uploader.upload(request.files['room_image'])

        # fetch for the user
        room = Room.query.filter_by(id = room_id).one_or_none()
        if not room :
            return jsonify("Your room is not found"), 404
        # update the user with the given cloudinary image UR

        room_archive = RoomArchives(room_id = room.id, url= result['secure_url'])
        db.session.add(room_archive)
        db.session.commit()

        return jsonify(room_archive.serialize()), 200
    else:
        raise APIException('Missing profile_image on the FormData')

#Hotel

@api.route('/new_hotel', methods=['POST']) 
def new_hotel():

    body_params = request.get_json()
    print(body_params)
    name = body_params.get("name", None)
    description = body_params.get("description", None)
    longitude = body_params.get("longitude", None)
    latitude = body_params.get("latitude", None)


    
    user1 = User(name=name, description = description, longitude=longitude, latitude=latitude)
    db.session.add(user1)
    db.session.commit()

    return jsonify({"msg": "El hotel fue creado exitosamente"}), 200

@api.route('/hotels', methods=['GET'])
def get_hotel():
    hotel = Hotel.query.all()
    response = []
    for x in hotel:
        response.append(x.serialize())
    return jsonify(response), 200


#City

@api.route('/new_city', methods=['POST']) 
def new_city():

    body_params = request.get_json()
    print(body_params)
    name = body_params.get("name", None)
    description = body_params.get("description", None)
    


    
    user1 = User(name=name, description = description)
    db.session.add(user1)
    db.session.commit()

    return jsonify({"msg": "La ciudad fue creada exitosamente"}), 200



@api.route("/me", methods=["GET", "PUT"])
@jwt_required()
def user_profile():
    identity = get_jwt_identity()
    user = current_user(get_jwt_identity())
    return jsonify(user.serialize())

def current_user(identity):
  print(identity["id"])
  return User.query.get(identity["id"])



#seed_data
@api.route('/seed_data', methods=['GET']) 
def seed_data():
    data = SeedDataEmployee()
    data.create_data()
    

    return jsonify({"msg":"datos creados"}), 200
