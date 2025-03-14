from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from kutsaApp.modelos import models, serializers


class BibliotecaAPIView(APIView):
    def get(self, request):
        objetos = models.Biblioteca.objects.all()
        serializer = serializers.BibliotecaSerializer(objetos, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = serializers.BibliotecaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
