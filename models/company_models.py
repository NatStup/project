from sqlalchemy import Column, Integer, String, ForeignKey

from database import Base

class Direction(Base):
    __tablename__ = 'direction'

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)


class ApplicantType(Base):
    __tablename__ = 'applicant_type'

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)


class Venue(Base):
    __tablename__ = 'venue'

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)


class Offer(Base):
    __tablename__ = 'offer'

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False)
    venue_id = Column(Integer, ForeignKey('venue.id'), nullable=True)
    uuid = Column(String, nullable=False)
    file_url = Column(String, nullable=False)
    url = Column(String, nullable=False)
