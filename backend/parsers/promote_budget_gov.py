import json

import requests

from parent import Parser


class PromoteBudgetGovParser(Parser):
    def __init__(self, url):
        super().__init__(url)
        self.headers = {
            'Accept': 'application/json',
            'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
            'Connection': 'keep-alive',
            'Content-Type': 'application/json',
            'Origin': 'https://promote.budget.gov.ru',
            'Referer': 'https://promote.budget.gov.ru/public/minfin/activity',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
            'Cookie': '1-user-uid=wKifnmdAdcgn/UopAwrVAg==; sputnik_session=1732292601651|1',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'same-origin',
            'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
        }

    def scrape_page(self):
        items = requests.post(
            self.entrance_url,
            headers=self.headers,

        )

    def scrape_pages(self):
        for page_number in range(1, 500):  # request to get range
            self.scrape_page(page_number)
