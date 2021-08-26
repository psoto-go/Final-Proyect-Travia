from api.models import db, User, Hotel, HotelArchives, Room, Reviews, Service, Services, HotelArchives, Booking, City
from sqlalchemy import text


class HotelSearcher:

  def __init__(self, city_id, people, start_date, end_date):
    self.city_id = city_id
    self.people = people
    self.start_date =start_date
    self.end_date=end_date

  def search(self):
    if self.city_id is not None and self.people is not None and self.start_date is not None and self.end_date is not None:
      return self.by_all()
    elif self.city_id is not None and self.people is not None and self.start_date is not None and self.end_date is None:
      return self.by_city_capacity_start_date()
    elif self.city_id is not None and self.people is not None and self.start_date is None and self.end_date is None:
      return self.by_city_capacity()
    elif self.city_id is not None and self.people is None and self.start_date is not None and self.end_date is not None:
      return self.by_city_period()
    elif self.city_id is not None and self.people is None and self.start_date is not None and self.end_date is None:
      return self.by_city_start_date()
    elif self.city_id is not None and self.people is None and self.start_date is None and self.end_date is None:
      return self.by_city()
    else:
      return self.by_all()

  def by_city(self):
    return Hotel.query.join(City).filter(City.id == self.city_id)

  def by_city_start_date(self):
    return Hotel.query.join(City).join(Room).join(Booking).filter(City.id == self.city_id).filter(Booking.start_date != self.start_date)

  def by_city_period(self):
    return Hotel.query.join(City).join(Room).join(Booking).filter(City.id == self.city_id).filter(Booking.start_date != self.start_date).filter(Booking.end_date != self.end_date)

  def by_city_capacity(self):
    return Hotel.query.join(City).join(Room).filter(City.id == self.city_id).filter(Room.number_of_persons == self.people)

  def by_city_capacity_start_date(self):
    return Hotel.query.join(City).join(Room).join(Booking).filter(City.id == self.city_id).filter(Room.number_of_persons == self.people).filter(Booking.start_date != self.start_date)

  def by_all(self):
    return Hotel.query.join(City).join(Room).join(Booking).filter(City.id == self.city_id).filter(Room.number_of_persons == self.people).filter(Booking.start_date != self.start_date).filter(Booking.end_date != self.end_date)
