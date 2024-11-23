from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

DB_CREDENTIALS = {
    'username': 'natstup',
    'password': 'asdf1234',
    'db_name': 'natstup',
}
SQLALCHEMY_DB = 'postgresql://{username}:{password}@localhost/{db_name}'.format(**DB_CREDENTIALS)

engine = create_engine(SQLALCHEMY_DB)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()