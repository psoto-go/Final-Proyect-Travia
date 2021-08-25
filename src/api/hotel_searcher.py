from api.models import db, User, Hotel, HotelArchives, Room, Reviews, Service, Services, HotelArchives, Booking, City
from sqlalchemy import text


class HotelSearcher:

  def __init__(self, city_id, people, start_date, end_date):
    self.city_id = city_id
    self.people = people
    self.start_date =start_date
    self.end_date=end_date

  def search(self):
    if self.city_id is not None:
      return self.by_city()
    else:
      return self.all()

  def by_city(self):

    return Hotel.query.join(City).filter(City.id == self.city_id)

  def all(self):
    return Hotel.query.all()
