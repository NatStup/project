from dotenv import load_dotenv
import os

from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

from settings import PASSWORD, USERNAME, DB_NAME


DB_CREDENTIALS = {
    'username': USERNAME,
    'password': PASSWORD,
    'db_name': DB_NAME,
}
SQLALCHEMY_DB = 'postgresql://{username}:{password}@localhost/{db_name}'.format(**DB_CREDENTIALS)

engine = create_engine(SQLALCHEMY_DB)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()
