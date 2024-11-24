import os

from dotenv import load_dotenv


load_dotenv()

USERNAME = os.getenv('USERNAME')
PASSWORD = os.getenv('PASSWORD')
DB_NAME = os.getenv('DB_NAME')
LLM_TOKEN = os.getenv('LLM_TOKEN')
