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
    password = db.Column(db.String(80), unique=False, nullable=True)
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
    name = db.Column(db.String(120), unique=False, nullable=True)
    description = db.Column(db.String(5000), unique=False, nullable=True)
    longitude = db.Column(db.String(100), unique=False, nullable=True)
    latitude = db.Column(db.String(100), unique=False, nullable=True)
    favorite = db.Column(db.Boolean, default=False, nullable=False)
    rooms = db.relationship('Room', backref='hotel', lazy=True)
    # questions = db.relationship('Question', backref='hotel', lazy=True)
    services = db.relationship("Service", secondary="services")
    users = db.relationship("User", secondary="reviews")
    reviews = db.relationship('Reviews', backref='Hotel', lazy=True)
    city_id = db.Column(db.Integer, db.ForeignKey('city.id'),
        nullable=False)
    HotelArchives = db.relationship('HotelArchives', backref='Hotel', lazy=True)

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "favorite": self.favorite,
            "longitude": self.longitude,
            "latitude": self.latitude,
            "rooms": list(map(lambda x:x.serialize(), self.rooms)),
            "reviews": list(map(lambda x:x.serialize(), self.reviews)),
            # "questions": list(map(lambda x:x.serialize(), self.questions)),
            "services": list(map(lambda x:x.serialize(), self.services)),
            "HotelArchives": list(map(lambda x:x.serialize(), self.HotelArchives)),
            "city_id": self.city_id

            # do not serialize the password, its a security breach
        }

class Reviews(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    hotel_id = db.Column(db.Integer, db.ForeignKey('hotel.id'))
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    hotel = db.relationship(Hotel, backref=backref("Reviews", cascade="all, delete-orphan"))
    user = db.relationship(User, backref=backref("Reviews", cascade="all, delete-orphan"))
    description = db.Column(db.String(5000), unique=False, nullable=False)
    characteristic = db.Column(db.String(200), unique=False, nullable=False)
    favorite = db.Column(db.Boolean, default=False, nullable=False)


    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "description": self.description,
            "hotel_id": self.hotel_id,
            "characteristic": self.characteristic,
            "favorite": self.favorite
            # do not serialize the password, its a security breach
        }

class Room(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    kind = db.Column(db.String(120), unique=False, nullable=False)
    number_of_beds = db.Column(db.Integer, unique=False, nullable=False)
    number_of_persons = db.Column(db.Integer, unique=False, nullable=False)
    price = db.Column(db.Integer, unique=False, nullable=False)
    hotel_id = db.Column(db.Integer, db.ForeignKey('hotel.id'),
        nullable=False)
    bookings = db.relationship('Booking', backref='room', lazy=True)
    roomArchives = db.relationship('RoomArchives', backref='Room', lazy=True)
    def serialize(self):
        return {
            "id": self.id,
            "kind": self.kind,
            "number_of_beds": self.number_of_beds,
            "number_of_persons": self.number_of_persons,
            "price": self.price,
            "roomArchives": list(map(lambda x:x.serialize(), self.roomArchives)),
            "bookings": list(map(lambda x:x.serialize(), self.bookings))
            # do not serialize the password, its a security breach
        }



class Service(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=False, nullable=True)
    hotels = db.relationship("Hotel", secondary="services")

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            # do not serialize the password, its a security breach]
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

class City(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=False, nullable=True)
    description = db.Column(db.String(5000), unique=False, nullable=True)
    hotels = db.relationship('Hotel', backref='city', lazy=True)
    url = db.Column(db.String(500), unique=False, nullable=True)

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "hotels": list(map(lambda x:x.serialize(), self.hotels)),
            "url": self.url
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

class RoomArchives(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    room_id = db.Column(db.Integer, db.ForeignKey('room.id'),
        nullable=False)
    url = db.Column(db.String(500), unique=False, nullable=True)

    def serialize(self):
        return {
            "id": self.id,
            "url": self.url,
            "room_id": self.room_id
            # do not serialize the password, its a security breach
        }

class Booking(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'),
        nullable=False)
    room_id = db.Column(db.Integer, db.ForeignKey('room.id'),
        nullable=False)
    start_date= db.Column(db.String(120), unique=False, nullable=True)
    end_date= db.Column(db.String(120), unique=False, nullable=True)
    price = db.Column(db.Integer, unique=False, nullable=False)
    
    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "room_id": self.room_id,
            "start_date": self.start_date,
            "end_date": self.end_date,
            "price": self.price        
            # do not serialize the password, its a security breach
        }

