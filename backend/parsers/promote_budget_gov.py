import json

import requests

from backend.parsers.parent import Parser


ITEMS_PER_PAGE = 50


class PromoteBudgetGovParser(Parser):
    def __init__(self):
        super().__init__()
        self.list_url = 'https://promote.budget.gov.ru/m-data/api/v1/minfin-activity/list-activity-card'
        self.selection_url_template = 'https://promote.budget.gov.ru/public/minfin/selection/view/{activity_id}?showBackButton=true&competitionType=0'
        self.main_info_url_template = 'https://promote.budget.gov.ru/m-data/api/v1/minfin-selection/view-basic/?selection={selection_id}&isPublicView=false'
        self.distribution_url_template = 'https://promote.budget.gov.ru/m-data/api/v1/minfin-selection-public/distribution?selection={selection_id}&competitionType=0&isPublicView=true'
        self.accepting_url_template = 'https://promote.budget.gov.ru/m-data/api/v1/minfin-selection/view-accepting/?selection={selection_id}&isPublicView=true'
        self.applications_url_template = 'https://promote.budget.gov.ru/m-data/api/v1/minfin-selection/view-app-view/?selection={selection_id}&isPublicView=true'
        # TODO: доработать фильтры - отбирать только релевантную информацию (незакрытые и незавершенные предложения)
        self.selections_list_data = {"currentPage":1,"entryCount":ITEMS_PER_PAGE,"recipientCategory":[],"recipientSelectionWayId":[],"minActivityAmountForPerson":None,"maxActivityAmountForPerson":None,"coFinancing":[],"activityYear":[],"subsidyTypeId":[],"budgetType":[],"activityCategory":[],"directionId":[],"okvedId":[],"textTerms":[],"realizationPlace":[],"pppCode":[],"activityType":[],"maxAmountType":[],"distributionType":[0],"sortDirection":0,"sortMember":"Default","isSelection":True,"geography":[],"tags":[],"selectionLicenseRequired":[],"accreditationRequired":[],"nkoTypeRequired":[1,2],"selectionType":1,"soOktmos":[]}
        self.list_headers = {
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
        self.item_headers = {
            'Accept': 'application/json',
            'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
            'Connection': 'keep-alive',
            'Referer': 'https://promote.budget.gov.ru/public/minfin/selection/view/{activity_id}?showBackButton=true&competitionType=0&tab=1',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
            'Cookie': '1-user-uid=wKifnmdAdcgn/UopAwrVAg==; sputnik_session=1732292601651|1',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'same-origin',
            'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
        }

    def scrape_page(self, page_number):
        print(f'Scraping page {page_number}')
        self.selections_list_data['currentPage'] = page_number
        page_response = requests.post(
            self.list_url,
            json=self.selections_list_data,
            headers=self.list_headers,
        )
        page_data = page_response.json()
        with open(f'/home/kamiexvoid/data/page_{page_number}.json', 'w', encoding='utf-8') as page_file:  # TODO path
            json.dump(page_data, page_file, ensure_ascii=False, indent=4)

        for item in page_data['item1']['items']:
            self.scrape_item(item)


    def scrape_pages(self):
        selections_count_response = requests.post(
            self.list_url,
            json=self.selections_list_data,
            headers=self.list_headers,
        )
        selections_count_data = selections_count_response.json()
        total_pages = selections_count_data['item1']['totalPages']
        for page_number in range(1, total_pages + 1):
            self.scrape_page(page_number)
