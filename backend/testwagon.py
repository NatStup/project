import requests

BASE_URL = 'https://promote.budget.gov.ru/m-data/api/v1/minfin-activity/list-activity-card'

headers = {
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
data = {"currentPage":1,"entryCount":5,"recipientCategory":[],"recipientSelectionWayId":[],"minActivityAmountForPerson":None,"maxActivityAmountForPerson":None,"coFinancing":[],"activityYear":[],"subsidyTypeId":[],"budgetType":[],"activityCategory":[],"directionId":[],"okvedId":[],"textTerms":[],"realizationPlace":[],"pppCode":[],"activityType":[],"maxAmountType":[],"distributionType":[],"sortDirection":0,"sortMember":"Default","isSelection":False,"geography":[],"tags":[],"selectionLicenseRequired":[],"accreditationRequired":[],"nkoTypeRequired":[1,2],"selectionType":0,"soOktmos":[]}

b = requests.post(BASE_URL, json=data, headers=headers)
print(b)
print(b.text)
