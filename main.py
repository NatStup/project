from typing import Optional

from fastapi import FastAPI

app = FastAPI()


@app.get('/get_directions')
async def get_directions():
    return []


@app.get('/get_applicant_types')
async def get_applicant_types():
    return []


@app.get('/get_venues')
async def get_venues():
    return []
