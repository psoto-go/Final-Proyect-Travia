from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class Hotel(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=False, nullable=False)
    description = db.Column(db.String(1000), unique=False, nullable=False)
    location = db.Column(db.String(100), unique=False, nullable=False)
    rooms = db.relationship('Room', backref='hotel', lazy=True)


    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "location": self.location,
            "rooms": list(map(lambda x:x.serialize(), self.rooms)),

            # do not serialize the password, its a security breach
        }

class Room(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    kind = db.Column(db.String(120), unique=False, nullable=False)
    number_of_beds = db.Column(db.Integer, unique=False, nullable=False)
    availability = db.Column(db.Date, unique=False, nullable=False)
    hotel_id = db.Column(db.Integer, db.ForeignKey('hotel.id'),
        nullable=False)
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
    kind = db.Column(db.String(120), unique=False, nullable=False)
    number_of_beds = db.Column(db.Integer, unique=False, nullable=False)
    availability = db.Column(db.Date, unique=False, nullable=False)
    hotel_id = db.Column(db.Integer, db.ForeignKey('hotel.id')