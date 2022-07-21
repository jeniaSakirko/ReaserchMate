from django.db import models
from django.contrib.auth.models import User
from .validators import ValidateBaseUser


class BaseUser(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    phone_number = models.IntegerField(null=True, blank=True)

    @staticmethod
    def create(email, username, password, first_name, last_name, phone_number):
        ValidateBaseUser(email=email, username=username, password=password, first_name=first_name,
                         last_name=last_name, phone_number=phone_number).start_validation()

        user = User(username=username, password=password, email=email, first_name=first_name, last_name=last_name)
        user.save()

        base_user = BaseUser(user=user, phone_number=phone_number)
        base_user.save()

        return base_user
