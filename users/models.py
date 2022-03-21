from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class CustomUser(AbstractUser):
    score = models.IntegerField(default = None, null = True)
    quizTaken = models.IntegerField(default = 0)
    def __str__(self):
        return self.email