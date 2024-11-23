from sqlalchemy import Column, Integer, String

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
