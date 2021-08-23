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
    start_date= db.Column(db.String(120), unique=False, nullable=True)
    end_date= db.Column(db.String(120), unique=False, nullable=True)
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
            "start_date": self.start_date,
            "end_date": self.end_date,
            "price": self.price,
            "roomArchives": list(map(lambda x:x.serialize(), self.roomArchives))
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

class SeedDataEmployee:

    def __init__(self):
        self.first_employee = None

    def create_user(self):
        self.user = User(email = "user@user.com", last_name = "apellidoUser", name ="user", password = "user", kind = "user")
        self.fermin = User(email = "fermin@user.com", last_name = "Trujillo", name ="Fermin", password = "fermin", kind = "user")
        self.paco = User(email = "paco@user.com", last_name = "Miranda", name ="Paco", password = "paco", kind = "user")
        self.admin = User(email = "admin@user.com", last_name = "apellidoAdmin", name ="admin", password = "admin", kind = "admin")
        db.session.add(self.user)
        db.session.add(self.fermin)
        db.session.add(self.paco)
        db.session.add(self.admin)
        db.session.commit()

    def create_city(self):
        self.city = City(name = "Murcia" , description = "Murcia es una ciudad universitaria en el sureste de España y la capital de la región también llamada Murcia. La Plaza del Cardenal Belluga es la principal pieza arquitectónica de la ciudad, donde la adornada catedral, con su mezcla de estilos desde gótico a barroco, y el colorido Palacio Episcopal del siglo XVIII se alzan en un impactante contraste con el anexo moderno del Ayuntamiento de la década de 1990, obra del arquitecto Rafael Moneo.", url = "https://res.cloudinary.com/pabletesglez/image/upload/v1629285693/Spain_Murcia_3840x2160_yjlfds.jpg")
        self.city1 = City(name = "Palma de Mallorca" , description = "Palma, capital de la isla española de Mallorca, es una ciudad turística situada en el oeste del mar Mediterráneo. La inmensa catedral de Santa María, un monumento gótico que se empezó a construir en el siglo XIII, domina el horizonte de la bahía de Palma. Junto a esta se halla la Almudaina, una fortaleza de estilo árabe convertida en residencia real. Al oeste de la ciudad, el castillo de Bellver, situado en la cima de un cerro, es una fortaleza medieval con una distintiva forma circular.", url = "https://res.cloudinary.com/pabletesglez/image/upload/v1629285566/mall_wboi7m.jpg")
        self.city2 = City(name = "Canarias" , description = "Las Islas Canarias, un archipiélago español frente a la costa noroeste de África, son islas volcánicas escarpadas conocidas por sus playas de arena blanca y negra. Tenerife, la isla más grande, es dominada por el volcán activo Teide, a veces nevado, que tiene su observatorio astronómico y es parte del Parque Nacional del Teide. Tenerife es sede de un gran carnaval previo a la Cuaresma en la capital, Santa Cruz de Tenerife.", url = "https://res.cloudinary.com/pabletesglez/image/upload/v1629285625/cann_q182d1.jpg")
        self.city3 = City(name = "Tenerife" , description = "Tenerife es la más grande de las islas Canarias de España, frente a África Occidental. La domina el monte Teide, un volcán inactivo que es la cima más alta de España. Tenerife es mejor conocida por el Carnaval de Santa Cruz, un enorme festival previo a la Cuaresma con desfiles, música, danza y trajes coloridos. La isla tiene muchas playas (con arenas que varían del amarillo al negro) y áreas de centros turísticos, incluidos Los Cristianos y Playa de las Américas.", url = "https://res.cloudinary.com/pabletesglez/image/upload/v1629285667/te_akrksm.jpg")
        db.session.add(self.city)
        db.session.add(self.city2)
        db.session.add(self.city1)
        db.session.add(self.city3)
        db.session.commit()

    def create_hotel(self):
        self.hotel = Hotel(name = "Occidental Murcia Siete Coronas", description = "El Occidental Murcia Siete Coronas (anteriormente llamado Barceló Murcia Siete Coronas) es un establecimiento elegante que se encuentra en el centro de Murcia, a orillas del río Segura y a 5 minutos a pie de la catedral. Las habitaciones del Occidental Murcia Siete Coronas son amplias y modernas y cuentan con aire acondicionado, WiFi gratuita, TV vía satélite, minibar y caja fuerte. El baño es privado e incorpora secador de pelo. Muchas habitaciones gozan de vistas al río o a la catedral. Hay un bar cafetería que sirve aperitivos y bebidas. El personal de la recepción 24 horas puede proporcionar información sobre qué ver y hacer en Murcia, y existe alquiler de coches. El Occidental Murcia Siete Coronas se halla a unos 10 minutos a pie del auditorio de Murcia y a 15 minutos a pie de las estaciones de autobuses y tren. Hay servicio de enlace con el aeropuerto San Javier, situado a 50 minutos en coche", longitude = "37.98271991088307", latitude = "-1.1241340844195875", city_id = self.city.id, favorite= True)
        self.hotel1 = Hotel(name = "Posada d' Es Molí", description = "La Posada d'Es Moli, situada en Playa de Palma, Mallorca, ofrece alojamiento elegante solo para adultos, que goza de una ubicación tranquila a solo 3 km de la playa.Las habitaciones de la Posada, situadas en los edificios de una antigua granja de 1897, son amplias y luminosas. Están bien equipadas y disponen de aire acondicionado y calefacción.La Posada goza de un entorno natural. Dispone de piscina al aire libre. Este alojamiento está rodeado de árboles frutales, palmeras y molinos antiguos, algunos de los cuales siguen en funcionamiento. Este alojamiento cuenta con una terraza de verano en la que se pueden degustar deliciosos platos de cocina casera. Los huéspedes podrán descubrir especialidades típicas mallorquinas, elaboradas con productos de la zona, además de frutas y verduras cultivadas en el propio establecimiento.", longitude = "39.52808764173537", latitude = "2.7728570321165837", city_id = self.city1.id, favorite= True)
        self.hotel2 = Hotel(name = "Hotel Rural Vilaflor", description = "El Hotel Rural Vilaflor ofrece un solárium y habitaciones en Vilaflor. El hotel está ubicado en una casa tradicional canaria de 150 años de antigüedad y cuenta con conexión Wi-Fi gratuita.Todas las habitaciones tienen vigas de madera en el techo y camas de hierro. Algunas tienen baño privado. También hay un salón compartido. El hotel dispone de un patio donde los huéspedes pueden relajarse. Tanto en el establecimiento como en los alrededores se pueden practicar diversas actividades, como senderismo y trekking.", longitude = "28.158863145816714", latitude = "-16.63624472506804", city_id = self.city3.id)
        self.hotel3 = Hotel(name = "Hotel New Folías", description = "El Hotel New Folias se encuentra a solo 100 metros de la playa de San Agustín, en el sur de Gran Canaria, y cuenta con una gran piscina climatizada. Las habitaciones son amplias y tienen vistas a la playa, al mar o a los jardines. Hay WiFi gratuita en todas las instalaciones. Todas las habitaciones disponen de zona de dormitorio, zona de salón, zona de cocina y baño privado. El Hotel New Folías tiene una terraza para tomar el sol y una piscina infantil. El bar Folias Garden, situado junto a la piscina, sirve una amplia selección de bebidas y aperitivos. Hay restaurantes, tiendas y una farmacia en el centro comercial San Agustín, a 5 minutos a pie del establecimiento. El centro de Playa del Inglés está a sólo 3 km y se puede llegar a él en el paseo marítimo. El aeropuerto está a 25 km y hay un servicio de autobús al aeropuerto y a Maspalomas que sale a sólo 150 metros.", longitude = "27.769379621783237", latitude = "-15.545678836134213", city_id = self.city2.id, favorite = True )
        db.session.add(self.hotel)
        db.session.add(self.hotel1)
        db.session.add(self.hotel2)
        db.session.add(self.hotel3)
        db.session.commit()
    
    def create_room(self):
        self.room = Room(kind = "doble", number_of_beds = 2, number_of_persons=2, start_date = "11/10/2021", end_date = "20/10/2021", hotel_id = self.hotel.id, price = 50)
        self.room1 = Room(kind = "doble", number_of_beds = 2, number_of_persons = 2, start_date = "11/10/2021", end_date = "20/10/2021", hotel_id = self.hotel1.id, price = 50)
        self.room2 = Room(kind = "individual", number_of_beds = 1, number_of_persons = 1, start_date = "17/10/2021", end_date = "24/10/2021", hotel_id = self.hotel1.id, price = 50)
        self.room3 = Room(kind = "suite", number_of_beds = 1, number_of_persons = 2, start_date = "13/10/2021", end_date = "21/10/2021", hotel_id = self.hotel2.id, price = 40)
        self.room4 = Room(kind = "matrimonio", number_of_beds = 1, number_of_persons = 2, start_date = "18/10/2021", end_date = "21/10/2021", hotel_id = self.hotel3.id, price = 30)
        db.session.add(self.room)
        db.session.add(self.room1)
        db.session.add(self.room2)
        db.session.add(self.room3)
        db.session.add(self.room4)
        db.session.commit()

    def create_review(self):
        self.review = Reviews(hotel_id = self.hotel.id, user_id = self.user.id, description = "El hotel es bastante nuevo, la habitación perfecta para nosotros estando con un bebé. Baño muy cómodo y bien reformado. Cama muy cómoda. Muy limpio. Bien de amenities.", characteristic = "limpio, comodo", favorite = True)
        self.review1 = Reviews(hotel_id = self.hotel.id, user_id = self.fermin.id, description = "La habitacion estuve muy bien, interior muy bonito. Ubicado en el centro del pueblo. Personal es muy amable. Hemos pasado en habitacion se llama tenerife. Os recomendamos", characteristic = "nuevo, comodo")
        self.review2 = Reviews(hotel_id = self.hotel1.id, user_id = self.paco.id, description = "Muy cómodo y la instalaciones geniales buen personal muy amables el socorrista muy simpático volvere", characteristic = "amables, comodo")
        self.review3 = Reviews(hotel_id = self.hotel2.id, user_id = self.user.id, description = "La piscina climatizada estaba muy bien, las camas y las almohadas muy cómodas, nos dejaron disfrutar de las instalaciones el día de salida hasta tarde sin pago extra pudiendo dejar nuestras pertenencias en la consigna.", characteristic = "limpio, comodo")
        self.review4 = Reviews(hotel_id = self.hotel3.id, user_id = self.fermin.id, description = "La atención de todo el personal. En recepción muy buen trato y mucha simpatía. En la piscina unos cócteles increíbles y el socorrista muy majo y divertido. En cocina super majos y serviciales. La limpieza muy buena. Volveré seguro. GRACIAS A TODOS", characteristic = "precio, comodo", favorite = True)
        self.review5 = Reviews(hotel_id = self.hotel2.id, user_id = self.user.id, description = "Todo en general, sobre todo destacó el equipo humano, Cristina la chica de recepción nos aconsejó desde primera hora y nos trato estupendo, Juan el chico de la piscina súper buena gente y carlos no podía faltar increíbles cócteles y sobre todo como persona un 10. Habitaciones y zonas comunes limpias, vistas inmejorables. Volveremos seguro, un saludo de los Sevillanos.", characteristic = "limpio, piscina")
        self.review6 = Reviews(hotel_id = self.hotel3.id, user_id = self.paco.id, description = "El hotel es bastante nuevo, la habitación perfecta para nosotros estando con un bebé. Baño muy cómodo y bien reformado. Cama muy cómoda. Muy limpio. Bien de amenities.", characteristic = "limpio, comodo", favorite = True)
        db.session.add(self.review)
        db.session.add(self.review1)
        db.session.add(self.review2)
        db.session.add(self.review3)
        db.session.add(self.review4)
        db.session.add(self.review5)
        db.session.add(self.review6)
        db.session.commit()

    def create_service(self):
        self.service1 = Service(name="Spa")
        self.service2 = Service(name="Cafe")
        self.service3 = Service(name="Lavanderia")
        self.service4 = Service(name="Tv")
        self.service5 = Service(name="Piscina")
        self.service6 = Service(name="Armario")
        self.service7 = Service(name="Tostadora")
        self.service8 = Service(name="Aire acondicionado")
        self.service9 = Service(name="Ascensor")
        self.service10 = Service(name="Sombrillas")
        self.service11 = Service(name="Guardaequipaje")
        self.service12  = Service(name="Billar")
        db.session.add(self.service1)
        db.session.add(self.service2)
        db.session.add(self.service3)
        db.session.add(self.service4)
        db.session.add(self.service5)
        db.session.add(self.service6)
        db.session.add(self.service7)
        db.session.add(self.service8)
        db.session.add(self.service9)
        db.session.add(self.service10)
        db.session.add(self.service11)
        db.session.add(self.service12)
        db.session.commit()

    def create_services(self):
        self.create_services1 = Services(hotel_id=self.hotel.id, service_id = self.service1.id)
        self.create_services2 = Services(hotel_id=self.hotel.id, service_id = self.service2.id)
        self.create_services3 = Services(hotel_id=self.hotel.id, service_id = self.service3.id)
        self.create_services4 = Services(hotel_id=self.hotel.id, service_id = self.service4.id)
        self.create_services5 = Services(hotel_id=self.hotel.id, service_id = self.service5.id)
        self.create_services6 = Services(hotel_id=self.hotel.id, service_id = self.service6.id)
        self.create_services7 = Services(hotel_id=self.hotel.id, service_id = self.service7.id)
        self.create_services8 = Services(hotel_id=self.hotel.id, service_id = self.service8.id)
        self.create_services9 = Services(hotel_id=self.hotel.id, service_id = self.service9.id)
        self.create_services10 = Services(hotel_id=self.hotel.id, service_id = self.service10.id)
        self.create_services11 = Services(hotel_id=self.hotel.id, service_id = self.service11.id)
        self.create_services12 = Services(hotel_id=self.hotel.id, service_id = self.service12.id)
        self.create_services13 = Services(hotel_id=self.hotel1.id, service_id = self.service1.id)
        self.create_services14= Services(hotel_id=self.hotel1.id, service_id = self.service2.id)
        self.create_services15 = Services(hotel_id=self.hotel1.id, service_id = self.service3.id)
        self.create_services16= Services(hotel_id=self.hotel1.id, service_id = self.service4.id)
        self.create_services17= Services(hotel_id=self.hotel1.id, service_id = self.service5.id)
        self.create_services18= Services(hotel_id=self.hotel1.id, service_id = self.service6.id)
        self.create_services19= Services(hotel_id=self.hotel1.id, service_id = self.service7.id)
        self.create_services20= Services(hotel_id=self.hotel1.id, service_id = self.service8.id)
        self.create_services21= Services(hotel_id=self.hotel1.id, service_id = self.service9.id)
        self.create_services22 = Services(hotel_id=self.hotel1.id, service_id = self.service10.id)
        self.create_services23 = Services(hotel_id=self.hotel1.id, service_id = self.service11.id)
        self.create_services24 = Services(hotel_id=self.hotel1.id, service_id = self.service12.id)
        self.create_services25 = Services(hotel_id=self.hotel2.id, service_id = self.service1.id)
        self.create_services26= Services(hotel_id=self.hotel2.id, service_id = self.service2.id)
        self.create_services27= Services(hotel_id=self.hotel2.id, service_id = self.service3.id)
        self.create_services28= Services(hotel_id=self.hotel2.id, service_id = self.service4.id)
        self.create_services29= Services(hotel_id=self.hotel2.id, service_id = self.service5.id)
        self.create_services30= Services(hotel_id=self.hotel2.id, service_id = self.service6.id)
        self.create_services31= Services(hotel_id=self.hotel2.id, service_id = self.service7.id)
        self.create_services32= Services(hotel_id=self.hotel2.id, service_id = self.service8.id)
        self.create_services33= Services(hotel_id=self.hotel2.id, service_id = self.service9.id)
        self.create_services34 = Services(hotel_id=self.hotel2.id, service_id = self.service10.id)
        self.create_services35 = Services(hotel_id=self.hotel2.id, service_id = self.service11.id)
        self.create_services36 = Services(hotel_id=self.hotel2.id, service_id = self.service12.id)
        self.create_services37 = Services(hotel_id=self.hotel3.id, service_id = self.service1.id)
        self.create_services38= Services(hotel_id=self.hotel3.id, service_id = self.service2.id)
        self.create_services39 = Services(hotel_id=self.hotel3.id, service_id = self.service3.id)
        self.create_services40= Services(hotel_id=self.hotel3.id, service_id = self.service4.id)
        self.create_services41= Services(hotel_id=self.hotel3.id, service_id = self.service5.id)
        self.create_services42= Services(hotel_id=self.hotel3.id, service_id = self.service6.id)
        self.create_services43= Services(hotel_id=self.hotel3.id, service_id = self.service7.id)
        self.create_services44= Services(hotel_id=self.hotel3.id, service_id = self.service8.id)
        self.create_services45= Services(hotel_id=self.hotel3.id, service_id = self.service9.id)
        self.create_services46 = Services(hotel_id=self.hotel3.id, service_id = self.service10.id)
        self.create_services47 = Services(hotel_id=self.hotel3.id, service_id = self.service11.id)
        self.create_services48 = Services(hotel_id=self.hotel3.id, service_id = self.service12.id)
        db.session.add(self.create_services1)
        db.session.add(self.create_services2)
        db.session.add(self.create_services3)
        db.session.add(self.create_services4)
        db.session.add(self.create_services5)
        db.session.add(self.create_services6)
        db.session.add(self.create_services7)
        db.session.add(self.create_services8)
        db.session.add(self.create_services9)
        db.session.add(self.create_services10)
        db.session.add(self.create_services11)
        db.session.add(self.create_services12)
        db.session.add(self.create_services13)
        db.session.add(self.create_services14)
        db.session.add(self.create_services15)
        db.session.add(self.create_services16)
        db.session.add(self.create_services17)
        db.session.add(self.create_services18)
        db.session.add(self.create_services19)
        db.session.add(self.create_services20)
        db.session.add(self.create_services21)
        db.session.add(self.create_services22)
        db.session.add(self.create_services23)
        db.session.add(self.create_services24)
        db.session.add(self.create_services25)
        db.session.add(self.create_services26)
        db.session.add(self.create_services27)
        db.session.add(self.create_services28)
        db.session.add(self.create_services29)
        db.session.add(self.create_services30)
        db.session.add(self.create_services31)
        db.session.add(self.create_services32)
        db.session.add(self.create_services33)
        db.session.add(self.create_services34)
        db.session.add(self.create_services35)
        db.session.add(self.create_services36)
        db.session.add(self.create_services37)
        db.session.add(self.create_services38)
        db.session.add(self.create_services39)
        db.session.add(self.create_services40)
        db.session.add(self.create_services41)
        db.session.add(self.create_services42)
        db.session.add(self.create_services43)
        db.session.add(self.create_services44)
        db.session.add(self.create_services45)
        db.session.add(self.create_services46)
        db.session.add(self.create_services47)
        db.session.add(self.create_services48)
        db.session.commit()

    def create_archives(self):
        self.create_archives1 = HotelArchives(hotel_id = self.hotel.id, url = "https://res.cloudinary.com/pabletesglez/image/upload/v1628854943/218303820_ahxjmr.jpg")
        self.create_archives2 = HotelArchives(hotel_id = self.hotel.id, url = "https://res.cloudinary.com/pabletesglez/image/upload/v1628854944/218298161_egq18l.jpg")
        self.create_archives3 = HotelArchives(hotel_id = self.hotel.id, url = "https://res.cloudinary.com/pabletesglez/image/upload/v1629282126/2020-11-16_1_dwby5q.jpg")
        self.create_archives4 = HotelArchives(hotel_id = self.hotel.id, url = "https://res.cloudinary.com/pabletesglez/image/upload/v1629282126/2020-11-16_d1uxfl.jpg")
        self.create_roomarchives1 = RoomArchives(room_id = self.room.id, url = "https://res.cloudinary.com/pabletesglez/image/upload/v1629283882/h1_z4lxvy.jpg")
        self.create_roomarchives2 = RoomArchives(room_id = self.room.id, url = "https://res.cloudinary.com/pabletesglez/image/upload/v1629283998/h2_nq0ko4.jpg")
        self.create_archives5 = HotelArchives(hotel_id = self.hotel1.id, url = "https://res.cloudinary.com/pabletesglez/image/upload/v1629282328/2021-07-30_vzwtvj.jpg")
        self.create_archives6 = HotelArchives(hotel_id = self.hotel1.id, url = "https://res.cloudinary.com/pabletesglez/image/upload/v1629282328/unnamed_1_hbgzmz.jpg")
        self.create_archives7 = HotelArchives(hotel_id = self.hotel1.id, url = "https://res.cloudinary.com/pabletesglez/image/upload/v1629282328/unnamed_2_q2buig.jpg")
        self.create_archives8 = HotelArchives(hotel_id = self.hotel1.id, url = "https://res.cloudinary.com/pabletesglez/image/upload/v1629282328/unnamed_ed26tt.jpg")
        self.create_roomarchives3 = RoomArchives(room_id = self.room1.id, url = "https://res.cloudinary.com/pabletesglez/image/upload/v1629284524/1111_ggiyuf.jpg")
        self.create_roomarchives4 = RoomArchives(room_id = self.room1.id, url = "https://res.cloudinary.com/pabletesglez/image/upload/v1629284524/111_wpwvdq.jpg")
        self.create_archives9 = HotelArchives(hotel_id = self.hotel2.id, url = "https://res.cloudinary.com/pabletesglez/image/upload/v1629282449/a2_ut2pnr.jpg")
        self.create_archives10 = HotelArchives(hotel_id = self.hotel2.id, url = "https://res.cloudinary.com/pabletesglez/image/upload/v1629282449/a1_puktpl.jpg")
        self.create_archives11 = HotelArchives(hotel_id = self.hotel2.id, url = "https://res.cloudinary.com/pabletesglez/image/upload/v1629282449/a3_fjt8xd.jpg")
        self.create_archives12 = HotelArchives(hotel_id = self.hotel2.id, url = "https://res.cloudinary.com/pabletesglez/image/upload/v1629282449/a_ujry1l.jpg")
        self.create_roomarchives5 = RoomArchives(room_id = self.room2.id, url = "https://res.cloudinary.com/pabletesglez/image/upload/v1629284806/xxx_tub1ma.jpg")
        self.create_roomarchives6 = RoomArchives(room_id = self.room2.id, url = "https://res.cloudinary.com/pabletesglez/image/upload/v1629284806/x_rmkxhp.jpg")
        self.create_archives13 = HotelArchives(hotel_id = self.hotel3.id, url = "https://res.cloudinary.com/pabletesglez/image/upload/v1629282561/b_rvipoc.jpg")
        self.create_archives14 = HotelArchives(hotel_id = self.hotel3.id, url = "https://res.cloudinary.com/pabletesglez/image/upload/v1629282561/b2_py4imf.jpg")
        self.create_archives15 = HotelArchives(hotel_id = self.hotel3.id, url = "https://res.cloudinary.com/pabletesglez/image/upload/v1629282561/b3_u6dtlb.jpg")
        self.create_archives16 = HotelArchives(hotel_id = self.hotel3.id, url = "https://res.cloudinary.com/pabletesglez/image/upload/v1629282561/b1_h8yvh9.jpg")
        self.create_roomarchives7 = RoomArchives(room_id = self.room3.id, url = "https://res.cloudinary.com/pabletesglez/image/upload/v1629284944/qqq_vfemxu.jpg")
        self.create_roomarchives8 = RoomArchives(room_id = self.room3.id, url = "https://res.cloudinary.com/pabletesglez/image/upload/v1629284944/q_sj5rqw.jpg")
        db.session.add(self.create_archives1)
        db.session.add(self.create_archives2)
        db.session.add(self.create_archives3)
        db.session.add(self.create_archives4)
        db.session.add(self.create_archives5)
        db.session.add(self.create_archives6)
        db.session.add(self.create_archives7)
        db.session.add(self.create_archives8)
        db.session.add(self.create_archives9)
        db.session.add(self.create_archives10)
        db.session.add(self.create_archives11)
        db.session.add(self.create_archives12)
        db.session.add(self.create_archives13)
        db.session.add(self.create_archives14)
        db.session.add(self.create_archives15)
        db.session.add(self.create_archives16)
        db.session.add(self.create_roomarchives1)
        db.session.add(self.create_roomarchives2)
        db.session.add(self.create_roomarchives3)
        db.session.add(self.create_roomarchives4)
        db.session.add(self.create_roomarchives5)
        db.session.add(self.create_roomarchives6)
        db.session.add(self.create_roomarchives7)
        db.session.add(self.create_roomarchives8)
        db.session.commit()

    def create_booking(self):
        self.create_booking = Booking(user_id = self.user.id, room_id = self.room.id, start_date = "11/10/2021", end_date = "20/10/2021", price = 200)
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