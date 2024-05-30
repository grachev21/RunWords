from django.db import models
from users.models import CustomUser


class WordsDb(models.Model):
    en = models.CharField(max_length=100)
    ru = models.CharField(max_length=100)
    tr = models.CharField(max_length=100)
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, verbose_name='Ползователь')

    def __str__(self):
        return self.en


class LearnedWords(models.Model):
    en = models.CharField(max_length=100)
    ru = models.CharField(max_length=100)
    tr = models.CharField(max_length=100)
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, verbose_name='Ползователь')

    def __str__(self):
        return self.en