from sqlalchemy.orm import Session

from models import company_models as cm
# from schemas import category_schemas as s

def get_directions(db: Session):
    return db.query(cm.Direction).all()


def get_applicant_types(db: Session):
    return db.query(cm.ApplicantType).all()


def get_venues(db: Session):
    return db.query(cm.Venue).all()