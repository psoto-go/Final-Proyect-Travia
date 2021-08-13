from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import safe_str_cmp
import datetime
from sqlalchemy import Column, Integer, DateTime
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship, backref

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    last_name = db.Column(db.String(120), unique=False, nullable=True)
    name = db.Column(db.String(120), unique=False, nullable=True)
    password = db.Column(db.String(80), unique=False, nullable=False)
    kind = db.Column(db.String(10), unique=False, nullable=False)
    created_date = db.Column(db.DateTime, server_default=db.func.current_timestamp())
    reviews = db.relationship("Hotel", secondary="reviews")
    bookings = db.relationship('Booking', backref='user', lazy=True)
    
    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "kind": self.kind,
            "name": self.name,
            "last_name": self.last_name,
            "created_date": self.created_date
            
        }

    def check_password(self, password_param):
        return safe_str_cmp(self.password.encode('utf-8'), password_param.encode('utf-8'))

    def create_user(self):
        self.user = User(email = "user@user.com", last_name = "apellidoUser", name ="user", password = "user", kind = "user")
        self.admin = User(email = "admin@user.com", last_name = "apellidoAdmin", name ="admin", password = "admin", kind = "admin")
        db.session.add(self.user)
        db.session.add(self.admin)
        db.session.commit()


class Hotel(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=False, nullable=True)
    description = db.Column(db.String(5000), unique=False, nullable=True)
    longitude = db.Column(db.String(100), unique=False, nullable=True)
    latitude = db.Column(db.String(100), unique=False, nullable=True)
    rooms = db.relationship('Room', backref='hotel', lazy=True)
    # questions = db.relationship('Question', backref='hotel', lazy=True)
    services = db.relationship("Service", secondary="services")
    reviews = db.relationship("User", secondary="reviews")
    city_id = db.Column(db.Integer, db.ForeignKey('city.id'),
        nullable=False)
    bookings = db.relationship('Booking', backref='hotel', lazy=True)
    HotelArchives = db.relationship('HotelArchives', backref='Hotel', lazy=True)


    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "longitude": self.longitude,
            "latitude": self.latitude,
            "rooms": list(map(lambda x:x.serialize(), self.rooms)),
            "reviews": list(map(lambda x:x.serialize(), self.reviews)),
            "questions": list(map(lambda x:x.serialize(), self.questions)),
            "services": list(map(lambda x:x.serialize(), self.services))

            # do not serialize the password, its a security breach
        }

    def create_city(self):
        self.city = City(name = "Murcia" , description = "Murcia es una ciudad universitaria en el sureste de España y la capital de la región también llamada Murcia. La Plaza del Cardenal Belluga es la principal pieza arquitectónica de la ciudad, donde la adornada catedral, con su mezcla de estilos desde gótico a barroco, y el colorido Palacio Episcopal del siglo XVIII se alzan en un impactante contraste con el anexo moderno del Ayuntamiento de la década de 1990, obra del arquitecto Rafael Moneo.")
        db.session.add(self.city)
        db.session.commit()

    def create_hotel(self):
        self.hotel = Hotel(name = "Occidental Murcia Siete Coronas", description = "El Occidental Murcia Siete Coronas (anteriormente llamado Barceló Murcia Siete Coronas) es un establecimiento elegante que se encuentra en el centro de Murcia, a orillas del río Segura y a 5 minutos a pie de la catedral. Las habitaciones del Occidental Murcia Siete Coronas son amplias y modernas y cuentan con aire acondicionado, WiFi gratuita, TV vía satélite, minibar y caja fuerte. El baño es privado e incorpora secador de pelo. Muchas habitaciones gozan de vistas al río o a la catedral. Hay un bar cafetería que sirve aperitivos y bebidas. El personal de la recepción 24 horas puede proporcionar información sobre qué ver y hacer en Murcia, y existe alquiler de coches. El Occidental Murcia Siete Coronas se halla a unos 10 minutos a pie del auditorio de Murcia y a 15 minutos a pie de las estaciones de autobuses y tren. Hay servicio de enlace con el aeropuerto San Javier, situado a 50 minutos en coche", longitude = "37.98271991088307", latitude = "-1.1241340844195875", city_id = self.city.id)
        db.session.add(self.hotel)
        db.session.commit()
    
    def create_data(self):
        self.create_city()
        self.create_hotel()


class Room(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    kind = db.Column(db.String(120), unique=False, nullable=False)
    number_of_beds = db.Column(db.Integer, unique=False, nullable=False)
    start_date= db.Column(db.String(120), unique=False, nullable=True)
    end_date= db.Column(db.String(120), unique=False, nullable=True)
    hotel_id = db.Column(db.Integer, db.ForeignKey('hotel.id'),
        nullable=False)
    bookings = db.relationship('Booking', backref='room', lazy=True)
    def serialize(self):
        return {
            "id": self.id,
            "kind": self.kind,
            "number_of_beds": self.number_of_beds,
            "start_date": self.start_date,
            "end_date": self.end_date
            # do not serialize the password, its a security breach
        }

    def create_room(self):
        self.room = Room(kind = "doble", number_of_beds = 2, start_date = "11/10/2021", end_date = "20/10/2021", hotel_id = 1)
        db.session.add(self.room)
        db.session.commit()

class Reviews(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    hotel_id = db.Column(db.Integer, db.ForeignKey('hotel.id'))
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    hotel = db.relationship(Hotel, backref=backref("Reviews", cascade="all, delete-orphan"))
    user = db.relationship(User, backref=backref("Reviews", cascade="all, delete-orphan"))
    description = db.Column(db.String(5000), unique=False, nullable=False)
    characteristic = db.Column(db.String(200), unique=False, nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "user_id": list(map(lambda x:x.serialize(), self.user_id)),
            "description": self.description,
            "hotel_id": list(map(lambda x:x.serialize(), self.hotel_id)),
            "characteristic": self.characteristic
            # do not serialize the password, its a security breach
        }

    def create_review(self):
        self.review = Reviews(hotel_id = 1, user_id = 1, description = "El hotel es bastante nuevo, la habitación perfecta para nosotros estando con un bebé. Baño muy cómodo y bien reformado. Cama muy cómoda. Muy limpio. Bien de amenities.", characteristic = "limpio, comodo")
        db.session.add(self.review)
        db.session.commit()

class Service(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=False, nullable=True)
    hotels = db.relationship("Hotel", secondary="services")

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            # do not serialize the password, its a security breach
        }
    

class Services(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    hotel_id = db.Column(db.Integer, db.ForeignKey('hotel.id'))
    service_id = db.Column(db.Integer, db.ForeignKey('service.id'))
    hotel = db.relationship(Hotel, backref=backref("Services", cascade="all, delete-orphan"))
    service = db.relationship(Service, backref=backref("Services", cascade="all, delete-orphan"))

    def serialize(self):
        return {
            "hotel_id": list(map(lambda x:x.serialize(), self.hotel_id)),
            "service_id": list(map(lambda x:x.serialize(), self.service_id))
            # do not serialize the password, its a security breach
        }
    def create_service(self):
        self.service1 = Service(name="Spa")
        self.service2 = Service(name="Cafe")
        self.service3 = Service(name="Lavanderia")
        self.service4 = Service(name="Tv")
        db.session.add(self.service1)
        db.session.add(self.service2)
        db.session.add(self.service3)
        db.session.add(self.service4)
        db.session.commit()

    def create_services(self):
        self.create_services1 = Services(hotel_id=1, service_id = self.service1.id)
        self.create_services2 = Services(hotel_id=1, service_id = self.service2.id)
        self.create_services3 = Services(hotel_id=1, service_id = self.service3.id)
        self.create_services4 = Services(hotel_id=1, service_id = self.service4.id)
        db.session.add(self.create_services1)
        db.session.add(self.create_services2)
        db.session.add(self.create_services3)
        db.session.add(self.create_services4)
        db.session.commit()

    def create_data(self):
        self.create_service()
        self.create_services()

class City(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=False, nullable=True)
    description = db.Column(db.String(5000), unique=False, nullable=True)
    hotels = db.relationship('Hotel', backref='city', lazy=True)

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "hotels": list(map(lambda x:x.serialize(), self.hotels))
            # do not serialize the password, its a security breach
        }

class HotelArchives(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    hotel_id = db.Column(db.Integer, db.ForeignKey('hotel.id'),
        nullable=False)
    url = db.Column(db.String(500), unique=False, nullable=True)

    def serialize(self):
        return {
            "id": self.id,
            "url": self.url,
            "hotel_id": self.hotel_id
            # do not serialize the password, its a security breach
        }

    def create_archives(self):
        self.create_archives1 = HotelArchives(hotel_id = 1, url = "https://res.cloudinary.com/pabletesglez/image/upload/v1628854944/218298161_egq18l.jpg")
        self.create_archives2 = HotelArchives(hotel_id = 1, url = "https://res.cloudinary.com/pabletesglez/image/upload/v1628854943/218275403_tzgsgv.jpg")
        self.create_archives3 = HotelArchives(hotel_id = 1, url = "https://res.cloudinary.com/pabletesglez/image/upload/v1628854943/218316032_cubtpl.jpg")
        self.create_archives4 = HotelArchives(hotel_id = 1, url = "https://res.cloudinary.com/pabletesglez/image/upload/v1628854943/218303820_ahxjmr.jpg")
        db.session.add(self.create_archives1)
        db.session.add(self.create_archives2)
        db.session.add(self.create_archives3)
        db.session.add(self.create_archives4)
        db.session.commit()

class Booking(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    hotel_id = db.Column(db.Integer, db.ForeignKey('hotel.id'),
        nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'),
        nullable=False)
    room_id = db.Column(db.Integer, db.ForeignKey('room.id'),
        nullable=False)
    start_date= db.Column(db.String(120), unique=False, nullable=True)
    end_date= db.Column(db.String(120), unique=False, nullable=True)
    
    

    def serialize(self):
        return {
            "id": self.id,
            "hotel_id": self.hotel_id,
            "user_id": self.user_id,
            "room_id": self.room_id,
            "start_date": self.start_date,
            "end_date": self.end_date         
            # do not serialize the password, its a security breach
        }

    def create_booking(self):
        self.create_booking = Booking(hotel_id = 1, user_id = 1, room_id = 1, start_date = "11/10/2021", end_date = "20/10/2021")
        db.session.add(self.create_booking)
        db.session.commit()



# class Question(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     title = db.Column(db.String(200), unique=False, nullable=False)
#     description = db.Column(db.String(1000), unique=False, nullable=False)
#     hotel_id = db.Column(db.Integer, db.ForeignKey('hotel.id'),
#         nullable=False)

#     def serialize(self):
#         return {
#             "id": self.id,
#             "title": self.title,
#             "description": self.description,
#             "hotel_id": list(map(lambda x:x.serialize(), self.hotel_id))
#             # do not serialize the password, its a security breach
#         }