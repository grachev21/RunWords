from django.contrib.auth.models import AbstractUser
from django.db import models


class CustomUser(AbstractUser):
    name = models.CharField(max_length=100, blank=True, null=True)
    photo = models.ImageField(upload_to ='uploads/% Y/% m/% d/', blank=True, null=True) 
    status = models.IntegerField(blank=True, null=True)