from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

from crud import company_crud
from dependencies import get_db

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)

@app.get('/api/get_directions')
async def get_directions(db: Session = Depends(get_db)):
    return company_crud.get_directions(db)


@app.get('/api/get_applicant_types')
async def get_applicant_types(db: Session = Depends(get_db)):
    return company_crud.get_applicant_types(db)


@app.get('/api/get_venues')
async def get_venues(db: Session = Depends(get_db)):
    return company_crud.get_venues(db)


@app.get('/api/get_filters')
async def get_filters(db: Session = Depends(get_db)):
    return {
        'directions': company_crud.get_directions(db),
        'applicant_types': company_crud.get_applicant_types(db),
        'venues': company_crud.get_venues(db),
    }


@app.get('/api/settings')
async def get_settings():
    return 'ok'
