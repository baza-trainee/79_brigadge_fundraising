from django.http import JsonResponse
from .functions import get_data_from_api, get_db_data
from .models import Jar

def initialize_jar(request):
    if not Jar.objects.exists():
        jar = Jar()
        jar.save()

def get_jar_details(request):
    """ Gets Jar details and updates database"""
    try:
        get_data_from_api()
        parsed_data = get_db_data()

        return JsonResponse(parsed_data)
    except Exception as e:
        print(e)

        parsed_data = {
                       "fundraisingGoal": None,
                       "totalDonations": None,
                       "recentDonations": None,
                       "largestDonations": None
                       }

        return JsonResponse(parsed_data)
