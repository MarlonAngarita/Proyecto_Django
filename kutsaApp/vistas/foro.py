from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from kutsaApp.modelos import models, serializers


class ForoAPIView(APIView):
    def get(self, request):
        objetos = models.Foro.objects.all()
        serializer = serializers.ForoSerializer(objetos, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = serializers.ForoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)