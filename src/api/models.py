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

class Hotel(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=False, nullable=True)
    description = db.Column(db.String(5000), unique=False, nullable=True)
    longitude = db.Column(db.String(100), unique=False, nullable=True)
    latitude = db.Column(db.String(100), unique=False, nullable=True)
    rooms = db.relationship('Room', backref='hotel', lazy=True)
    # questions = db.relationship('Question', backref='hotel', lazy=True)
    services = db.relationship("Service", secondary="services")
    users = db.relationship("User", secondary="reviews")
    reviews = db.relationship('Reviews', backref='Hotel', lazy=True)
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
            # "questions": list(map(lambda x:x.serialize(), self.questions)),
            "services": list(map(lambda x:x.serialize(), self.services))

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

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "description": self.description,
            "hotel_id": self.hotel_id,
            "characteristic": self.characteristic
            # do not serialize the password, its a security breach
        }

class Room(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    kind = db.Column(db.String(120), unique=False, nullable=False)
    number_of_beds = db.Column(db.Integer, unique=False, nullable=False)
    start_date= db.Column(db.String(120), unique=False, nullable=True)
    end_date= db.Column(db.String(120), unique=False, nullable=True)
    hotel_id = db.Column(db.Integer, db.ForeignKey('hotel.id'),
        nullable=False)
    bookings = db.relationship('Booking', backref='room', lazy=True)
    roomArchives = db.relationship('RoomArchives', backref='Room', lazy=True)
    def serialize(self):
        return {
            "id": self.id,
            "kind": self.kind,
            "number_of_beds": self.number_of_beds,
            "start_date": self.start_date,
            "end_date": self.end_date
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

    


class SeedDataEmployee:

    def __init__(self):
        self.first_employee = None

    def create_user(self):
        self.user = User(email = "user@user.com", last_name = "apellidoUser", name ="user", password = "user", kind = "user")
        self.admin = User(email = "admin@user.com", last_name = "apellidoAdmin", name ="admin", password = "admin", kind = "admin")
        db.session.add(self.user)
        db.session.add(self.admin)
        db.session.commit()

    def create_city(self):
        self.city = City(name = "Murcia" , description = "Murcia es una ciudad universitaria en el sureste de España y la capital de la región también llamada Murcia. La Plaza del Cardenal Belluga es la principal pieza arquitectónica de la ciudad, donde la adornada catedral, con su mezcla de estilos desde gótico a barroco, y el colorido Palacio Episcopal del siglo XVIII se alzan en un impactante contraste con el anexo moderno del Ayuntamiento de la década de 1990, obra del arquitecto Rafael Moneo.")
        self.city1 = City(name = "Palma de Mallorca" , description = "Palma, capital de la isla española de Mallorca, es una ciudad turística situada en el oeste del mar Mediterráneo. La inmensa catedral de Santa María, un monumento gótico que se empezó a construir en el siglo XIII, domina el horizonte de la bahía de Palma. Junto a esta se halla la Almudaina, una fortaleza de estilo árabe convertida en residencia real. Al oeste de la ciudad, el castillo de Bellver, situado en la cima de un cerro, es una fortaleza medieval con una distintiva forma circular.")
        self.city2 = City(name = "Canarias" , description = "Las Islas Canarias, un archipiélago español frente a la costa noroeste de África, son islas volcánicas escarpadas conocidas por sus playas de arena blanca y negra. Tenerife, la isla más grande, es dominada por el volcán activo Teide, a veces nevado, que tiene su observatorio astronómico y es parte del Parque Nacional del Teide. Tenerife es sede de un gran carnaval previo a la Cuaresma en la capital, Santa Cruz de Tenerife.")
        self.city3 = City(name = "Tenerife" , description = "Tenerife es la más grande de las islas Canarias de España, frente a África Occidental. La domina el monte Teide, un volcán inactivo que es la cima más alta de España. Tenerife es mejor conocida por el Carnaval de Santa Cruz, un enorme festival previo a la Cuaresma con desfiles, música, danza y trajes coloridos. La isla tiene muchas playas (con arenas que varían del amarillo al negro) y áreas de centros turísticos, incluidos Los Cristianos y Playa de las Américas.")
        db.session.add(self.city)
        db.session.add(self.city2)
        db.session.add(self.city1)
        db.session.add(self.city3)
        db.session.commit()

    def create_hotel(self):
        self.hotel = Hotel(name = "Occidental Murcia Siete Coronas", description = "El Occidental Murcia Siete Coronas (anteriormente llamado Barceló Murcia Siete Coronas) es un establecimiento elegante que se encuentra en el centro de Murcia, a orillas del río Segura y a 5 minutos a pie de la catedral. Las habitaciones del Occidental Murcia Siete Coronas son amplias y modernas y cuentan con aire acondicionado, WiFi gratuita, TV vía satélite, minibar y caja fuerte. El baño es privado e incorpora secador de pelo. Muchas habitaciones gozan de vistas al río o a la catedral. Hay un bar cafetería que sirve aperitivos y bebidas. El personal de la recepción 24 horas puede proporcionar información sobre qué ver y hacer en Murcia, y existe alquiler de coches. El Occidental Murcia Siete Coronas se halla a unos 10 minutos a pie del auditorio de Murcia y a 15 minutos a pie de las estaciones de autobuses y tren. Hay servicio de enlace con el aeropuerto San Javier, situado a 50 minutos en coche", longitude = "37.98271991088307", latitude = "-1.1241340844195875", city_id = self.city.id)
        self.hotel1 = Hotel(name = "Posada d' Es Molí", description = "La Posada d'Es Moli, situada en Playa de Palma, Mallorca, ofrece alojamiento elegante solo para adultos, que goza de una ubicación tranquila a solo 3 km de la playa.Las habitaciones de la Posada, situadas en los edificios de una antigua granja de 1897, son amplias y luminosas. Están bien equipadas y disponen de aire acondicionado y calefacción.La Posada goza de un entorno natural. Dispone de piscina al aire libre. Este alojamiento está rodeado de árboles frutales, palmeras y molinos antiguos, algunos de los cuales siguen en funcionamiento. Este alojamiento cuenta con una terraza de verano en la que se pueden degustar deliciosos platos de cocina casera. Los huéspedes podrán descubrir especialidades típicas mallorquinas, elaboradas con productos de la zona, además de frutas y verduras cultivadas en el propio establecimiento.", longitude = "39.52808764173537", latitude = "2.7728570321165837", city_id = self.city1.id)
        self.hotel2 = Hotel(name = "Hotel Rural Vilaflor", description = "El Hotel Rural Vilaflor ofrece un solárium y habitaciones en Vilaflor. El hotel está ubicado en una casa tradicional canaria de 150 años de antigüedad y cuenta con conexión Wi-Fi gratuita.Todas las habitaciones tienen vigas de madera en el techo y camas de hierro. Algunas tienen baño privado. También hay un salón compartido. El hotel dispone de un patio donde los huéspedes pueden relajarse. Tanto en el establecimiento como en los alrededores se pueden practicar diversas actividades, como senderismo y trekking.", longitude = "28.158863145816714", latitude = "-16.63624472506804", city_id = self.city3.id)
        self.hotel3 = Hotel(name = "Hotel New Folías", description = "El Hotel New Folias se encuentra a solo 100 metros de la playa de San Agustín, en el sur de Gran Canaria, y cuenta con una gran piscina climatizada. Las habitaciones son amplias y tienen vistas a la playa, al mar o a los jardines. Hay WiFi gratuita en todas las instalaciones. Todas las habitaciones disponen de zona de dormitorio, zona de salón, zona de cocina y baño privado. El Hotel New Folías tiene una terraza para tomar el sol y una piscina infantil. El bar Folias Garden, situado junto a la piscina, sirve una amplia selección de bebidas y aperitivos. Hay restaurantes, tiendas y una farmacia en el centro comercial San Agustín, a 5 minutos a pie del establecimiento. El centro de Playa del Inglés está a sólo 3 km y se puede llegar a él en el paseo marítimo. El aeropuerto está a 25 km y hay un servicio de autobús al aeropuerto y a Maspalomas que sale a sólo 150 metros.", longitude = "27.769379621783237", latitude = "-15.545678836134213", city_id = self.city2.id)
        db.session.add(self.hotel)
        db.session.add(self.hotel1)
        db.session.add(self.hotel2)
        db.session.add(self.hotel3)
        db.session.commit()
    
    def create_room(self):
        self.room = Room(kind = "doble", number_of_beds = 2, start_date = "11/10/2021", end_date = "20/10/2021", hotel_id = self.hotel.id)
        db.session.add(self.room)
        db.session.commit()

    def create_review(self):
        self.review = Reviews(hotel_id = self.hotel.id, user_id = self.user.id, description = "El hotel es bastante nuevo, la habitación perfecta para nosotros estando con un bebé. Baño muy cómodo y bien reformado. Cama muy cómoda. Muy limpio. Bien de amenities.", characteristic = "limpio, comodo")
        db.session.add(self.review)
        db.session.commit()

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
        self.create_services1 = Services(hotel_id=self.hotel.id, service_id = self.service1.id)
        self.create_services2 = Services(hotel_id=self.hotel.id, service_id = self.service2.id)
        self.create_services3 = Services(hotel_id=self.hotel.id, service_id = self.service3.id)
        self.create_services4 = Services(hotel_id=self.hotel.id, service_id = self.service4.id)
        db.session.add(self.create_services1)
        db.session.add(self.create_services2)
        db.session.add(self.create_services3)
        db.session.add(self.create_services4)
        db.session.commit()

    def create_archives(self):
        self.create_archives1 = HotelArchives(hotel_id = self.hotel.id, url = "https://res.cloudinary.com/pabletesglez/image/upload/v1628854944/218298161_egq18l.jpg")
        self.create_archives2 = HotelArchives(hotel_id = self.hotel.id, url = "https://res.cloudinary.com/pabletesglez/image/upload/v1628854943/218275403_tzgsgv.jpg")
        self.create_archives3 = HotelArchives(hotel_id = self.hotel.id, url = "https://res.cloudinary.com/pabletesglez/image/upload/v1628854943/218316032_cubtpl.jpg")
        self.create_archives4 = HotelArchives(hotel_id = self.hotel.id, url = "https://res.cloudinary.com/pabletesglez/image/upload/v1628854943/218303820_ahxjmr.jpg")
        db.session.add(self.create_archives1)
        db.session.add(self.create_archives2)
        db.session.add(self.create_archives3)
        db.session.add(self.create_archives4)
        db.session.commit()

    def create_booking(self):
        self.create_booking = Booking(hotel_id = self.hotel.id, user_id = self.user.id, room_id = self.room.id, start_date = "11/10/2021", end_date = "20/10/2021")
        db.session.add(self.create_booking)
        db.session.commit()


    def create_data(self):
        self.create_user()
        self.create_city()
        self.create_hotel()
        self.create_room()
        self.create_review()
        self.create_service()
        self.create_services()
        self.create_archives()
        self.create_booking()



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