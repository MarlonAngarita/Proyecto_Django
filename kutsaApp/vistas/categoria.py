from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from kutsaApp.modelos import models, serializers

class CategoriaAPIView(APIView):
    def get(self, request):
        objetos = models.Categoria.objects.all()
        serializer = serializers.CategoriaSerializer(objetos, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = serializers.CategoriaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)