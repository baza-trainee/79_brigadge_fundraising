# Generated by Django 4.2.5 on 2023-11-04 21:35

from django.db import migrations, models
import django.db.models.deletion
import os

class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Jar',
            fields=[
                ('jar_id', models.CharField(max_length=100, primary_key=True, serialize=False, default=os.environ['JAR'])),
                ('target_amount', models.IntegerField(default=50000)),
                ('current_amount', models.IntegerField(default=0)),
            ],
        ),
        migrations.CreateModel(
            name='RecentDonation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('donor', models.CharField(max_length=100)),
                ('donationAmount', models.DecimalField(decimal_places=2, max_digits=10)),
                ('time', models.DateTimeField(null=True)),
                ('jar', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='donations.jar')),
            ],
        ),
        migrations.CreateModel(
            name='Donation',
            fields=[
                ('id', models.CharField(max_length=50, primary_key=True, serialize=False)),
                ('donor', models.CharField(max_length=100)),
                ('donationAmount', models.DecimalField(decimal_places=2, max_digits=10)),
                ('time', models.DateTimeField(null=True)),
                ('jar', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='donations.jar')),
            ],
        ),
    ]
