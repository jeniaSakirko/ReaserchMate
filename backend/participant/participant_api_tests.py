# import pytest
# from .models import Participant
#
#
# def send_request(client, url, data=None, content_type='application/json'):
#     if data is None:
#         data = {}
#     return client.post(url, data=data, content_type=content_type)
#
#
# def get_list():
#     return list(Participant.get_all())
#
#
# @pytest.mark.django_db
# class TestParticipantModelAPI:
#     def test_create_api(self, client):
#         all_before = get_list()
#
#         data = {
#             'user': {
#                 'email': 'test@gmail.com',
#                 'username': 'jenia',
#                 'password': 'jeniajenia'
#             },
#             'first_name': 'jenia',
#             'last_name': 'Sak',
#             'phone_number': 1234567890
#         }
#
#         response = send_request(client, '/api/participant/', data)
#         assert response.status_code == 201
#
#         all_after = get_list()
#         assert len(all_before) + 1 == len(all_after)
#
#     def test_create_api_failed_name(self, client, participant_fixture, participant_data):
#         data = {
#             'user': {
#                 'email': 'no email',
#                 'username': 'test_name_validation_username',
#                 'password': pytest.participant_password
#             },
#             'first_name': pytest.participant_first_name,
#             'last_name': pytest.participant_last_name,
#             'phone_number': pytest.participant_phone_number
#         }
#         response = send_request(client, '/api/participant/', data)
#         assert response.status_code == 400
