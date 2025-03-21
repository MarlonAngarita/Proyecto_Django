from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from kutsaApp.modelos import models, serializers

class QuizAPIView(APIView):
    def get(self, request):
        objetos = models.Quiz.objects.all()
        serializer = serializers.QuizSerializer(objetos, many=True)
        return(serializer.data)
    
    def post(self, request):
        serializer = serializers.QuizSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)