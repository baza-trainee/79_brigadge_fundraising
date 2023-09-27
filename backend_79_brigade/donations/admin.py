from django.contrib import admin
from .models import Donation, Jar, RecentDonation


class DonationAdmin(admin.ModelAdmin):
    list_display = ('id', 'donor', 'donationAmount', 'jar')


class JarsAdmin(admin.ModelAdmin):
    list_display = ('jar_id', 'target_amount', 'current_amount')


class RecentDonationsAdmin(admin.ModelAdmin):
    list_display = ('donor', 'donationAmount', 'jar')


admin.site.register(Donation, DonationAdmin)
admin.site.register(Jar, JarsAdmin)
admin.site.register(RecentDonation, RecentDonationsAdmin)
