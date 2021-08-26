from api.models import db, User, Hotel, HotelArchives, Room, Reviews, Service, Services, HotelArchives, Booking, City
from sqlalchemy import func


class HotelSearcher:

  def __init__(self, city, people, start_date, end_date):
    self.city = city
    self.people = people
    self.start_date =start_date
    self.end_date=end_date

  def search(self):
    if self.city is not None and self.people is not None and self.start_date is not None and self.end_date is not None:
      return self.by_all()
    elif self.city is not None and self.people is not None and self.start_date is not None and self.end_date is None:
      return self.by_city_capacity_start_date()
    elif self.city is not None and self.people is not None and self.start_date is None and self.end_date is None:
      return self.by_city_capacity()
    elif self.city is not None and self.people is None and self.start_date is not None and self.end_date is not None:
      return self.by_city_period()
    elif self.city is not None and self.people is None and self.start_date is not None and self.end_date is None:
      return self.by_city_start_date()
    elif self.city is not None and self.people is None and self.start_date is None and self.end_date is None:
      return self.by_city()
    else:
      return self.by_empty()

  def by_city(self):
    return Hotel.query.join(City).filter(func.lower(City.name) == func.lower(self.city))

  def by_city_start_date(self):
    return Hotel.query.join(City).join(Room).join(Booking).filter(func.lower(City.name) == func.lower(self.city)).filter(Booking.start_date != self.start_date)

  def by_city_period(self):
    return Hotel.query.join(City).join(Room).join(Booking).filter(func.lower(City.name) == func.lower(self.city)).filter(Booking.start_date != self.start_date).filter(Booking.end_date != self.end_date)

  def by_city_capacity(self):
    return Hotel.query.join(City).join(Room).filter(func.lower(City.name) == func.lower(self.city)).filter(Room.number_of_persons == self.people)

  def by_city_capacity_start_date(self):
    return Hotel.query.join(City).join(Room).join(Booking).filter(func.lower(City.name) == func.lower(self.city)).filter(Room.number_of_persons == self.people).filter(Booking.start_date != self.start_date)

  def by_all(self):
    return Hotel.query.join(City).join(Room).join(Booking).filter(func.lower(City.name) == func.lower(self.city)).filter(Room.number_of_persons == self.people).filter(Booking.start_date != self.start_date).filter(Booking.end_date != self.end_date)

  def by_empty(self):
    return Hotel.query.all()

