import random
from typing import Optional

from sqlalchemy.orm import Session

from models import company_models as cm
from schemas import company_schemas


# from schemas import category_schemas as s

def get_directions(db: Session):
    return db.query(cm.Direction).all()


def get_applicant_types(db: Session):
    return db.query(cm.ApplicantType).all()


def get_venues(db: Session):
    return db.query(cm.Venue).all()


def get_articles(db: Session, specific_request: Optional[str], specific_tages: Optional[str]):
    articles = db.query(cm.Offer)
    if specific_request:
        articles = articles.filter(cm.Offer.title.ilike(f'%{specific_request}%'))
        if not articles:
            return []

        articles = articles.all()
    else:
        articles = articles.all()

    if not articles:
        return articles

    if len(articles) >= 10:
        articles = random.sample(articles, 10)

    return articles
