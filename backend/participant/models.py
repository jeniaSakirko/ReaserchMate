from django.db import models
from base_user.models import BaseUser


class Participant(models.Model):
    base_user = models.OneToOneField(BaseUser, on_delete=models.CASCADE)

    @staticmethod
    def create(email, username, password, first_name, last_name, phone_number):
        res = Participant(base_user=BaseUser.create(email=email, username=username, password=password,
                                                    first_name=first_name, last_name=last_name,
                                                    phone_number=phone_number))
        res.save()
        return res

    @staticmethod
    def get_by_id(participant_id):
        result = Participant.objects.filter(id=participant_id).first()
        return result

    @staticmethod
    def get_all():
        return Participant.objects.all()
