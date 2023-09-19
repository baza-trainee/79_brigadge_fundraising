from django.contrib import admin
from .models import Donation, Jars, RecentDonations


class DonationAdmin(admin.ModelAdmin):
    list_display = ('id', 'donor', 'donationAmount', 'jar')


class JarsAdmin(admin.ModelAdmin):
    list_display = ('jar_id', 'target_amount', 'current_amount')


class RecentDonationsAdmin(admin.ModelAdmin):
    list_display = ('donor', 'donationAmount', 'jar')


admin.site.register(Donation, DonationAdmin)
admin.site.register(Jars, JarsAdmin)
admin.site.register(RecentDonations, RecentDonationsAdmin)
