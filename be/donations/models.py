from django.db import models
import os

class Jar(models.Model):
    jar_id = models.CharField(primary_key=True, max_length=100, default=os.environ['JAR'])
    target_amount = models.IntegerField(default=50000)
    current_amount = models.IntegerField(default=0)

    objects = models.Manager()

    def __str__(self):
        return f'{self.jar_id} - цільова сума {self.target_amount} грн.'


class Donation(models.Model):
    id = models.CharField(primary_key=True, max_length=50)
    donor = models.CharField(max_length=100)
    donationAmount = models.DecimalField(max_digits=10, decimal_places=2)
    jar = models.ForeignKey(Jar, on_delete=models.CASCADE, null=True)
    time = models.DateTimeField(null=True)

    objects = models.Manager()

    def __str__(self):
        return f'{self.donor} - {self.donationAmount} грн.'


class RecentDonation(models.Model):
    donor = models.CharField(max_length=100)
    donationAmount = models.DecimalField(max_digits=10, decimal_places=2)
    jar = models.ForeignKey(Jar, on_delete=models.CASCADE, null=True)
    time = models.DateTimeField(null=True)

    objects = models.Manager()

    def __str__(self):
        return f'{self.donor} - {self.donationAmount} грн.'
