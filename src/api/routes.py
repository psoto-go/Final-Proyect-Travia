"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Hotel, HotelArchives, Room, Reviews, Service, Services, HotelArchives, Booking, City
from api.utils import generate_sitemap, APIException
from api.hotel_searcher import HotelSearcher
from api.seed import SeedData
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

@api.route('/sign_up_google', methods=['POST']) 
def sign_up_user_google():

    body_params = request.get_json()
    print(body_params)
    name = body_params.get("name", None)
    last_name = body_params.get("last_name", None)
    email = body_params.get("email", None)
    created_date = body_params.get("created_date", None)

    allowUser = User.query.filter_by(email = email).first()
    print(allowUser)
    if allowUser is None:
        user1 = User(name=name, last_name = last_name, email=email, kind='user', created_date=created_date)
        db.session.add(user1)
        db.session.commit()
        return jsonify({"msg": "El usuario fue creado exitosamente"}), 200
    else:
        return jsonify({"msg": "El usuario fue ingresado exitosamente"}), 200
 
    return jsonify({"error": "El usuario no fue creado"}), 200

    
    
    


@api.route('/users', methods=['GET'])
def handle_hello2():
    user = User.query.all()
    response = []
    for x in user:
        response.append(x.serialize())
    
    return jsonify(response), 200

@api.route('/user/<int:user_id>', methods=['GET'])
def userid(user_id):
    body = request.get_json()
    cha = User.query.get(user_id)
    return jsonify({"response":cha.serialize()}), 200

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
        return jsonify({"access_token":  access_token}), 200
    
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
def image_hotel(hotel_id):
    print(request.files)
    # validate that the front-end request was built correctly
    if 'profile_image' in request.files:
        # upload file to uploadcare
        result = cloudinary.uploader.upload(request.files['profile_image'])

        # fetch for the user
        print(2)
        hotel = Hotel.query.filter_by(id = hotel_id).one_or_none()
        print(3)
        if not hotel :
            return jsonify("Your hotel is not found"), 404
        # update the user with the given cloudinary image UR

        print(4)
        hotel_archive = HotelArchives(hotel_id = hotel.id, url= result['secure_url'])
        print(5)
        db.session.add(hotel_archive)
        db.session.commit()
        print(6)

        return jsonify(hotel_archive.serialize()), 200
    else:
        print(7)
        raise APIException('Missing profile_image on the FormData')

@api.route('/room/<int:room_id>/image', methods=['POST','PUT'])
def image_room(room_id):

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

@api.route('/city/<int:city_id>/image', methods=['POST','PUT'])
def image_city(city_id):

    # validate that the front-end request was built correctly
    if 'city_image' in request.files:
        # upload file to uploadcare
        result = cloudinary.uploader.upload(request.files['city_image'])

        # fetch for the user
        city = City.query.filter_by(id = city_id).one_or_none()
        if not room :
            return jsonify("Your city is not found"), 404
        # update the user with the given cloudinary image UR

        city.url = (result['secure_url'])
        db.session.add(city)
        db.session.commit()

        return jsonify(city.serialize()), 200
    else:
        raise APIException('Missing profile_image on the FormData')

#Hotel

@api.route('/new_hotel', methods=['POST']) 
def new_hotel():
    print(request.form)
    name = request.form["name"]
    description = request.form["description"]
    longitude = request.form["longitude"]
    latitude = request.form["latitude"]
    favorite = request.form["favorite"].lower() in ['true']
    city_id = int(request.form["city_id"])
    services = request.form['services']
    formatservices = services.split(',')
    servicesToAdd = []
    for service in formatservices:
        servicesToAdd.append(Service.query.filter_by(id = int(service)).first())

    
    hotel = Hotel(name=name, description = description, longitude=longitude, latitude=latitude, favorite = favorite, city_id=city_id, services = servicesToAdd)
    db.session.add(hotel)
    db.session.commit()
    print(request.files['files'])
    if 'files' in request.files :
        # upload file to uploadcare
        result = cloudinary.uploader.upload(request.files['files'])

        # fetch for the user
        print(2)
        print(3)
        if not hotel :
            return jsonify("Your hotel is not found"), 404
        # update the user with the given cloudinary image UR

        print(4)
        hotel_archive = HotelArchives(hotel_id = hotel.id, url= result['secure_url'])
        print(5)
        db.session.add(hotel_archive)
        db.session.commit()
        print(6)

        return jsonify(hotel_archive.serialize()), 200
    else:
        print(7)
        raise APIException('Missing profile_image on the FormData')
    print("*********", hotel.id)
    return jsonify({"msg": "El hotel fue creado exitosamente", "id": hotel.id}), 200

@api.route('/new_room', methods=['POST']) 
def new_room():

    body_params = request.get_json()
    kind = body_params.get("kind", None)
    number_of_beds = body_params.get("number_of_beds", None)
    number_of_persons = body_params.get("number_of_persons", None)
    price = body_params.get("price", None)
    hotel_id = body_params.get("hotel_id", False)
    room = Room(kind=kind, number_of_beds=number_of_beds, number_of_persons=number_of_persons, price=price, hotel_id=hotel_id)
    print("@@@@@@@", room)
    db.session.add(room)
    db.session.commit()
    return jsonify({"msg": "El hotel fue creado exitosamente"}), 200


@api.route('/hotels', methods=['GET'])
def get_hotel():
    args = request.args
    print(args)
    city = args.get("city", None)
    people = args.get("people", None)
    start_date = args.get("start_date", None)
    print(start_date)
    end_date = args.get("end_date", None)

    seacher = HotelSearcher(city, people, start_date, end_date)
    hotel = seacher.search()
    response = []

    for x in hotel:
        response.append(x.serialize())

    return jsonify({"response":  response}), 200

@api.route('/featuredhotels', methods=['GET'])
def get_featuredhotel():
    hotel = Hotel.query.filter_by(favorite=True)
    response = []
    for x in hotel:
        response.append(x.serialize())
    return jsonify({"response":  response}), 200

@api.route('/hotel/<int:hotel_id>', methods=['GET'])
def hotelid(hotel_id):
    body = request.get_json()
    cha = Hotel.query.get(hotel_id)
    return jsonify({"response": cha.serialize()}), 200

#City

@api.route('/new_city', methods=['POST']) 
def new_city():

    body_params = request.get_json()
    print(body_params)
    name = body_params.get("name", None)
    description = body_params.get("description", None)
    
    user1 = City(name=name, description = description)
    db.session.add(user1)
    db.session.commit()

    return jsonify({"msg": "La ciudad fue creada exitosamente"}), 200

@api.route('/cities', methods=['GET'])
def get_cities():
    cities = City.query.all()
    response = []
    for x in cities:
        response.append(x.serialize())
    return jsonify({"response": response}), 200

@api.route('/city/<int:city_id>', methods=['GET'])
def cityid(city_id):
    body = request.get_json()
    cha = City.query.get(city_id)
    return jsonify({"response":cha.serialize()}), 200

#reviews

@api.route('/featuredreviews', methods=['GET'])
def get_reviews():
    reviews = Reviews.query.filter_by(favorite=True)
    response = []
    for x in reviews:
        response.append(x.serialize())
    return jsonify({"response": response}), 200

@api.route('/review/<int:review_id>', methods=['GET'])
def reviewid(review_id):
    body = request.get_json()
    cha = Reviews.query.get(review_id)
    return jsonify({"response":cha.serialize()}), 200



@api.route("/me", methods=["GET", "PUT"])
@jwt_required()
def user_profile():
    identity = get_jwt_identity()
    user = current_user(get_jwt_identity())
    return jsonify(user.serialize())

def current_user(identity):
  print(identity["id"])
  return User.query.get(identity["id"])


#services

@api.route('/services', methods=['GET'])
def get_services():
    services = Service.query.all()
    response = []
    for x in services:
        response.append(x.serialize())
    return jsonify({"response": response}), 200

@api.route('/new_service', methods=['POST']) 
def new_service():

    body_params = request.get_json()
    print(body_params)
    name = body_params.get("name", None)
    
    user1 = Service(name=name)
    db.session.add(user1)
    db.session.commit()

    return jsonify({"msg": "el service fue creado exitosamente"}), 200




#seed_data
@api.route('/seed_data', methods=['GET']) 
def seed_data():
    data = SeedData()
    data.create_data()
    

    return jsonify({"msg":"datos creados"}), 200
