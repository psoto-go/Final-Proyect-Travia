from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import safe_str_cmp

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    last_name = db.Column(db.String(120), unique=False, nullable=True)
    name = db.Column(db.String(120), unique=False, nullable=True)
    password = db.Column(db.String(80), unique=False, nullable=False)
    reviews = db.relationship('Review', backref='user', lazy=True)
    bookings = db.relationship('Booking', backref='user', lazy=True)
    
    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            
        }

    def check_password(self, password_param):
        return safe_str_cmp(self.password.encode('utf-8'), password_param.encode('utf-8'))

class Administrador(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    last_name = db.Column(db.String(120), unique=False, nullable=True)
    name = db.Column(db.String(120), unique=False, nullable=True)
    password = db.Column(db.String(80), unique=False, nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email
        }
    def check_password(self, password_param):
        return safe_str_cmp(self.password.encode('utf-8'),password_param.encode('utf-8'))


class Hotel(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=False, nullable=False)
    description = db.Column(db.String(1000), unique=False, nullable=False)
    location = db.Column(db.String(100), unique=False, nullable=False)
    rooms = db.relationship('Room', backref='hotel', lazy=True)
    reviews = db.relationship('Review', backref='hotel', lazy=True)
    questions = db.relationship('Question', backref='hotel', lazy=True)
    services = db.relationship('service', secondary=services, lazy='subquery',
        backref=db.backref('hotels', lazy=True))
    city_id = db.Column(db.Integer, db.ForeignKey('city.id'),
        nullable=False)
    bookings = db.relationship('Booking', backref='hotel', lazy=True)


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

class Review(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'),
        nullable=False)
    description = db.Column(db.String(1000), unique=False, nullable=False)
    hotel_id = db.Column(db.Integer, db.ForeignKey('hotel.id'),
        nullable=False)
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

class Question(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), unique=False, nullable=False)
    description = db.Column(db.String(1000), unique=False, nullable=False)
    hotel_id = db.Column(db.Integer, db.ForeignKey('hotel.id'),
        nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "title": self.title,
            "description": self.description,
            "hotel_id": list(map(lambda x:x.serialize(), self.hotel_id))
            # do not serialize the password, its a security breach
        }

services = db.Table('services',
    db.Column('service_id', db.Integer, db.ForeignKey('service.id'), primary_key=True),
    db.Column('hotel_id', db.Integer, db.ForeignKey('hotel.id'), primary_key=True)
)

class Service(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=False, nullable=True)
    description = db.Column(db.String(1000), unique=False, nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "title": self.title,
            "description": self.description
            # do not serialize the password, its a security breach
        }

class City(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=False, nullable=True)
    hotels = db.relationship('Hotel', backref='city', lazy=True)

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
    
    

    def serialize(self):
        return {
            "id": self.id
            
            # do not serialize the password, its a security breach
        }