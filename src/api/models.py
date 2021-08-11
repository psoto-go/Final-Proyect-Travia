from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import safe_str_cmp
import datetime
from sqlalchemy import Column, Integer, DateTime
from sqlalchemy.ext.declarative import declarative_base

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


class Hotel(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=False, nullable=False)
    description = db.Column(db.String(1000), unique=False, nullable=False)
    longitude = db.Column(db.String(100), unique=False, nullable=False)
    latitude = db.Column(db.String(100), unique=False, nullable=False)
    rooms = db.relationship('Room', backref='hotel', lazy=True)
    questions = db.relationship('Question', backref='hotel', lazy=True)
    services = db.relationship("Service", secondary="services")
    reviews = db.relationship("User", secondary="reviews")
    city_id = db.Column(db.Integer, db.ForeignKey('city.id'),
        nullable=False)
    bookings = db.relationship('Booking', backref='hotel', lazy=True)
    # hotels = db.relationship('Hotel', backref='city', lazy=True)


    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "location": self.location,
            "rooms": list(map(lambda x:x.serialize(), self.rooms)),
            "reviews": list(map(lambda x:x.serialize(), self.reviews)),
            "questions": list(map(lambda x:x.serialize(), self.questions)),
            "services": list(map(lambda x:x.serialize(), self.services))

            # do not serialize the password, its a security breach
        }

class Room(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    kind = db.Column(db.String(120), unique=False, nullable=False)
    number_of_beds = db.Column(db.Integer, unique=False, nullable=False)
    availability = db.Column(db.Date, unique=False, nullable=False)
    hotel_id = db.Column(db.Integer, db.ForeignKey('hotel.id'),
        nullable=False)
    bookings = db.relationship('Booking', backref='room', lazy=True)
    def serialize(self):
        return {
            "id": self.id,
            "kind": self.kind,
            "number_of_beds": self.number_of_beds,
            "availability": self.availability
            # do not serialize the password, its a security breach
        }

# class Review(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     user_id = db.Column(db.Integer, db.ForeignKey('user.id'),
#         nullable=False)
#     description = db.Column(db.String(1000), unique=False, nullable=False)
#     hotel_id = db.Column(db.Integer, db.ForeignKey('hotel.id'),
#         nullable=False)
#     characteristic = db.Column(db.String(200), unique=False, nullable=False)

#     def serialize(self):
#         return {
#             "id": self.id,
#             "user_id": list(map(lambda x:x.serialize(), self.user_id)),
#             "description": self.description,
#             "hotel_id": list(map(lambda x:x.serialize(), self.hotel_id)),
#             "characteristic": self.characteristic
#             # do not serialize the password, its a security breach
#         }

class Reviews(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    hotel_id = db.Column(db.Integer, db.ForeignKey('hotel.id'))
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    hotel = db.relationship(Hotel, backref=backref("reviews", cascade="all, delete-orphan"))
    user = db.relationship(User, backref=backref("reviews", cascade="all, delete-orphan"))
    description = db.Column(db.String(1000), unique=False, nullable=False)
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


class Services(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    hotel_id = db.Column(db.Integer, db.ForeignKey('hotel.id'))
    service_id = db.Column(db.Integer, db.ForeignKey('service.id'))
    hotel = db.relationship(Hotel, backref=backref("services", cascade="all, delete-orphan"))
    service = db.relationship(Service, backref=backref("services", cascade="all, delete-orphan"))

    def serialize(self):
        return {
            "hotel_id": list(map(lambda x:x.serialize(), self.hotel_id)),
            "service_id": list(map(lambda x:x.serialize(), self.service_id))
            # do not serialize the password, its a security breach
        }


class Service(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=False, nullable=True)
    hotels = db.relationship("Hotel", secondary="services")

    def serialize(self):
        return {
            "id": self.id,
            "title": self.title,
            # do not serialize the password, its a security breach
        }

class City(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=False, nullable=True)
    description = db.Column(db.String(120), unique=False, nullable=True)
    hotels = db.relationship('Hotel', backref='city', lazy=True)

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
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
            "name": self.name,
            "hotels": list(map(lambda x:x.serialize(), self.hotels))
            # do not serialize the password, its a security breach
        }

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
            "id": self.id
            
            # do not serialize the password, its a security breach
        }
