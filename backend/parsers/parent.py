from database import SessionLocal
from models.company_models import Offer


class Parser:

    def save_item_in_file(self, file_uuid, info):
        pass

    def save_item_in_database(self, info):
        db = SessionLocal()

        a = db.query(Offer).filter(Offer.uuid == info['uuid']).first()
        if a:
            a.title = info['title']
            a.file_url = info['file_url']
            a.venue_id = info.get('venue_id')
            a.url = info['url']
            try:
                db.commit()
                db.refresh(a)
            except Exception:
                db.rollback()
            finally:
                db.close()

        a = Offer(
            title=info['title'],
            uuid=info['uuid'],
            file_url=info['file_url'],
            venue_id=info.get('venue_id'),
            url=info['url'],
        )
        try:
            db.add(a)
            db.commit()
            db.refresh(a)
        except Exception:
            db.rollback()
            print(123)
        finally:
            db.close()

    def scrape_item(self, item):
        pass

    def scrape_page(self, page_number):
        pass

    def scrape_pages(self):
        pass

