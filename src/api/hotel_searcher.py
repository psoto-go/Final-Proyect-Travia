from api.models import db, User, Hotel, HotelArchives, Room, Reviews, Service, Services, HotelArchives, Booking, City


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
    return db.session.query(Hotel).filter(Hotel.city_id.like(self.city_id))
    # return Hotel.query.join(City).filter(City.id == self.city_id)

  def all(self):
    return Hotel.query.all()
