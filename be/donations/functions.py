import requests
from datetime import datetime
import re
from .models import Donation, Jar, RecentDonation
from django.conf import settings
import pdb


def get_data_from_api():
    print(111111111111)
    now = int(datetime.now().timestamp())
    last_date = now - 2678400

    headers = {
        "X-Token": settings.MONOBANK_API_KEY
    }

    if last_date < settings.JAR_CREATION_DATE:
        start_date = settings.JAR_CREATION_DATE
    else:
        start_date = last_date

    url = f"https://api.monobank.ua/personal/statement/{settings.JAR}/{start_date}"

    response = requests.get(url, headers=headers)
    jar = Jar.objects.get(jar_id=settings.JAR)

    if response.status_code == 200:
        data = response.json()

        # Update the balance field
        jar.current_amount = data[0]["balance"] * 0.01
        jar.save()

        all_donates = []
        pattern = r'^Від: \w+\s\w+'
        for donate in data:
            if donate["amount"] > 0:
                if re.match(pattern, donate["description"]):
                    all_donates.append({"id": donate["id"],
                                        "donationAmount": donate["amount"] * 0.01,
                                        "donor": donate["description"].replace("Від: ", ""),
                                        "time": datetime.utcfromtimestamp(donate["time"])})
                else:
                    all_donates.append({"id": donate["id"],
                                        "donationAmount": donate["amount"] * 0.01,
                                        "donor": "Невідомий Благодійник",
                                        "time": datetime.utcfromtimestamp(donate["time"])})

        existing_recent = RecentDonation.objects.filter(jar=jar)
        existing_recent.delete()

        for donate in all_donates[:5]:
            donation = RecentDonation(donor=donate["donor"],
                                      donationAmount=donate["donationAmount"],
                                      jar=jar,
                                      time=donate["time"]
                                      )
            donation.save()

        for donate in all_donates:
            if not Donation.objects.filter(id=donate["id"]).exists():
                donation = Donation(id=donate["id"],
                                    donor=donate["donor"],
                                    donationAmount=donate["donationAmount"],
                                    jar=jar,
                                    time=donate["time"]
                                    )
                donation.save()
                print(f"Donation from {donate['donor']} is saved.")

            else:
                print("Such donate already exists!")


def get_db_data():
    jar = Jar.objects.get(jar_id=settings.JAR)
    donates_db_data = Donation.objects.filter(jar=jar)

    recent_donates_db_data = RecentDonation.objects.filter(jar=jar)

    overall_donates = [{"donor": donate.donor,
                        "donationAmount": float(donate.donationAmount),
                        "time": donate.time} for donate in donates_db_data]
    target_amount = float(jar.target_amount)
    current_amount = float(jar.current_amount)
    recent_donates = [{"donor": donate.donor,
                       "donationAmount": float(donate.donationAmount),
                       "time": donate.time} for donate in recent_donates_db_data]

    largest_donations = sorted(overall_donates, key=lambda x: x["donationAmount"], reverse=True)[:5]

    parsed_data = {
        "fundraisingGoal": target_amount,
        "totalDonations": current_amount,
        "recentDonations": recent_donates,
        "largestDonations": largest_donations
    }

    return parsed_data
