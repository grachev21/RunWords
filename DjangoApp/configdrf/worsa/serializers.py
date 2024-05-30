from rest_framework import serializers
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser

from .models import WordsDb


# class WorsaModel:
#     def __inti__(self, en, ru, tr):
#         self.en = en
#         self.ru = ru
#         self.tr = tr

class WorsaSerializer(serializers.Serializer):
    en = serializers.CharField(max_length=100)
    ru = serializers.CharField(max_length=100)
    tr = serializers.CharField(max_length=100)


# def encode():
#     model = WorsaModel('hello', 'привет', '...')
#     model_sr = WorsaSerializer(model)
#     json = JSONRenderer().render(model_sr.data)
#     print(json)


# def decode():
#     stream = io.BytesIO(b"{'en':'hello', 'ru': 'hello', 'tr': '...'}")
#     data = JSONParser().parse(stream)
#     serializer = WorsaSerializer(data=data)
#     serializer.is_valid()
#     print(serializer.validate_empty_values)