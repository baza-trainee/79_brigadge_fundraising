from django.db import models


class Jars(models.Model):
    jar_id = models.CharField(primary_key=True, max_length=100)
    target_amount = models.IntegerField(default=0)
    current_amount = models.IntegerField(default=0)

    objects = models.Manager()

    def __str__(self):
        return f'{self.jar_id} - цільова сума {self.target_amount} грн.'


class Donation(models.Model):
    id = models.CharField(primary_key=True, max_length=50)
    donor = models.CharField(max_length=100)
    donationAmount = models.DecimalField(max_digits=10, decimal_places=2)
    jar = models.ForeignKey(Jars, on_delete=models.CASCADE, null=True)

    objects = models.Manager()

    def __str__(self):
        return f'{self.donor} - {self.donationAmount} грн.'


class RecentDonations(models.Model):
    donor = models.CharField(max_length=100)
    donationAmount = models.DecimalField(max_digits=10, decimal_places=2)
    jar = models.ForeignKey(Jars, on_delete=models.CASCADE, null=True)

    objects = models.Manager()

    def __str__(self):
        return f'{self.donor} - {self.donationAmount} грн.'
