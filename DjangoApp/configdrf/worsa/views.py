from django.shortcuts import render
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import WordsDb
from .serializers import WorsaSerializer


# class HomeAPIView(generics.ListAPIView):
#     queryset = WordsDb.objects.all()
#     serializer_class = WorsaSerializer

class WorsaAPIView(APIView):

    def get(self, request):
        words = WordsDb.objects.all()
        return Response({'posts': WorsaSerializer(words, many=True).data})

    def post(self, request):
        # Проверка
        serializer = WorsaSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        post_new = WordsDb.objects.create(
            en=request.data['en'],
            ru=request.data['ru'],
            tr=request.data['tr'],
        )
        return Response({'post': WorsaSerializer(post_new).data})
