from django.http import JsonResponse
import requests
from datetime import datetime
import re
from .models import Donation, Jars, RecentDonations
from dotenv import load_dotenv
import logging
import os


logging.basicConfig(format='%(levelname)s:%(message)s', level=logging.WARNING)
load_dotenv()

try:
    JAR = os.environ['JAR']
    MONOBANK_API_KEY = os.environ['MONOBANK_API_KEY']
except KeyError as err:
    logging.critical(f"Can't read token from environment variable. Message: {err}")
    raise KeyError(err)


now = int(datetime.now().timestamp())
last_date = now - 2682000
jar_creation_date = 1695028385  # need to modify in production

headers = {
    "X-Token": MONOBANK_API_KEY
}


def get_jar_details(request):
    """ Gets Jar details and updates database"""
    if last_date < jar_creation_date:
        start_date = jar_creation_date
    else:
        start_date = last_date

    url = f"https://api.monobank.ua/personal/statement/{JAR}/{start_date}"

    response = requests.get(url, headers=headers)
    jar = Jars.objects.get(jar_id=JAR)

    if response.status_code == 200:
        data = response.json()

        if len(data) < 1:
            parsed_data = {
                           "fundraisingGoal": None,
                           "totalDonations": None,
                           "recentDonations": None,
                           "largestDonations": None
                           }

            return JsonResponse(parsed_data)

        jar.current_amount = data[0]['balance'] * 0.01
        jar.save()
        all_donates = []
        pattern = r'^Від: \w+\s\w+'
        for donate in data:
            if donate["amount"] > 0:
                if re.match(pattern, donate["description"]):
                    all_donates.append({"id": donate["id"],
                                        "donationAmount": donate["amount"] * 0.01,
                                        "donor": donate["description"].lstrip("Від: ")})
                else:
                    all_donates.append({"id": donate["id"],
                                        "donationAmount": donate["amount"] * 0.01,
                                        "donor": "Невідомий Благодійник"})

        existing_recent = RecentDonations.objects.filter(jar=jar)
        existing_recent.delete()

        for donate in all_donates[:5]:
            donation = RecentDonations(donor=donate["donor"],
                                       donationAmount=donate["donationAmount"],
                                       jar=jar
                                       )
            donation.save()

        for donate in all_donates:
            if not Donation.objects.filter(id=donate["id"]).exists():
                donation = Donation(id=donate["id"],
                                    donor=donate["donor"],
                                    donationAmount=donate["donationAmount"],
                                    jar=jar
                                    )
                donation.save()
                print(f"Donation from {donate['donor']} is saved.")

            else:
                print("Such donate already exists!")

    donates_db_data = Donation.objects.filter(jar=jar)
    recent_donates_db_data = RecentDonations.objects.filter(jar=jar)

    overall_donates = [{"donor": donate.donor,
                        "donationAmount": float(donate.donationAmount)} for donate in donates_db_data]
    target_amount = float(jar.target_amount)
    current_amount = float(jar.current_amount)
    recent_donates = [{"donor": donate.donor,
                       "donationAmount": float(donate.donationAmount)} for donate in recent_donates_db_data]
    largest_donations = sorted(overall_donates, key=lambda x: x["donationAmount"], reverse=True)[:5]

    parsed_data = {
                    "fundraisingGoal": target_amount,
                    "totalDonations": current_amount,
                    "recentDonations": recent_donates,
                    "largestDonations": [largest_donations]
                    }

    return JsonResponse(parsed_data)
