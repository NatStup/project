from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from fastapi.openapi.docs import get_swagger_ui_html
from openai import OpenAI
from sqlalchemy.orm import Session

from crud import company_crud
from crud.company_crud import get_articles
from dependencies import get_db
from schemas import company_schemas
from settings import LLM_TOKEN

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
    # openapi_url="/openapi.json"
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
        'directions': [
            {
                'name': direction.name.capitalize(),
                'id': direction.id,
            } for direction in company_crud.get_directions(db)
        ],
        'applicant_types': company_crud.get_applicant_types(db),
        'venues': company_crud.get_venues(db),
    }


@app.get('/api/settings')
async def get_settings():
    return 'ok'


# @app.get("/docs")
# def read_docs():
#     return get_swagger_ui_html(openapi_url="/openapi.json")

@app.get('/api/search')
async def get_search(search: company_schemas.SearchSupport = None, db: Session = Depends(get_db)):
    return get_articles(db, search)


@app.get('/api/get_company_types')
async def get_neuron(db: Session = Depends(get_db)):
    client = OpenAI(
        api_key=LLM_TOKEN,
        base_url='http://81.94.159.216:5000',
    )
    completion = client.completions.create(
        model="Qwen/Qwen2.5-1.5B-Instruct",
        prompt="San Francisco is a",
    )
