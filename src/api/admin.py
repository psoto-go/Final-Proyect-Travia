  
import os
from flask_admin import Admin
from .models import db, User, Hotel, City,Room, Reviews, Service, Services, HotelArchives, Booking
from flask_admin.contrib.sqla import ModelView

def setup_admin(app):
    app.secret_key = os.environ.get('FLASK_APP_KEY', 'sample key')
    app.config['FLASK_ADMIN_SWATCH'] = 'cerulean'
    admin = Admin(app, name='4Geeks Admin', template_mode='bootstrap3')

    
    # Add your models here, for example this is how we add a the User model to the admin
    admin.add_view(ModelView(User, db.session))
    admin.add_view(ModelView(Hotel, db.session))
    admin.add_view(ModelView(City, db.session))
    admin.add_view(ModelView(Room, db.session))
    admin.add_view(ModelView(Reviews, db.session))
    admin.add_view(ModelView(Service, db.session))
    admin.add_view(ModelView(Services, db.session))
    admin.add_view(ModelView(HotelArchives, db.session))
    admin.add_view(ModelView(Booking, db.session))


    # You can duplicate that line to add mew models
    # admin.add_view(ModelView(YourModelName, db.session))