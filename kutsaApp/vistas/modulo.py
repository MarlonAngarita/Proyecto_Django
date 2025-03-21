from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from kutsaApp.modelos import models, serializers

class ModulosAPIView(APIView):
    def get(self, request):
        objetos = models.Modulos.objects.all()
        serializer = serializers.ModulosSerializer(objetos, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = serializers.ModulosSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)