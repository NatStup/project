import requests
from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

from crud import company_crud
from crud.company_crud import get_articles
from dependencies import get_db
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
async def get_search(db: Session = Depends(get_db)):
    return get_articles(db)


@app.get('/api/get_neuron_text')
async def get_neuron(uuid: str):
    try:
        f = open(f'data/selections/{uuid}.md', 'r', encoding='utf-8')
    except Exception:
        return HTTPException(status_code=400, detail='Такого файла не существует')

    context = f.read()

    prompt = '''<s>[INST]Контекст:
    """
    {context}
    """

    Опираясь на контекст, ответь на вопросы:
    * Что нужно для получения поддержки?
    * Что можно получить по этой программе поддержки (субсидии)?

    Кратко опиши программу поддержки (2-3 предложения), затем ответь на вопросы выше (также 2-3 предложения).[/INST]'''
    prompt = prompt.format(context=context)
    response = requests.post(
        'http://81.94.159.216:5000/v1/completions',
        json={
            'model': 'kamiex/Mistral-Nemo-Instruct-2407-W8A16',
            'prompt': prompt,
            'max_tokens': 512,
            'temperature': 0.3
        },
        headers={'Authorization': f'Bearer {LLM_TOKEN}'},
    )
    # completion = client.completions.create(model="kamiex/Mistral-Nemo-Instruct-2407-W8A16", prompt=prompt)
    # return completion.choices[0].text
    return response.json()['choices'][0]['text']


