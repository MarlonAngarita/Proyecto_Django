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
    

class CursoAPIView(APIView):
    def get(self, request):
        objetos = models.Cursos.objects.all()
        serializer = serializers.CursosSerializer(objetos, many=True)
        return Response(serializer.data)
    
    def post (self, request):
        serializer = serializers.CursosSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)


class DetalleContenidoAPIView(APIView):
    def get(self, request):
        objetos = models.DetalleContenido.all()
        serializer = serializers.DetalleContenidoSerializer(objetos, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = serializers.DetalleContenidoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)
    
class DetalleCursoAPIView(APIView):
    def get(self, request):
        objetos = models.DetalleCurso.objects.all()
        serializer = serializers.DetalleCursoSerializer(objetos, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = serializers.DetalleCursoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)


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


class RolesAPIView(APIView):
    def get(self, request):
        objetos = models.Roles.objects.all()
        serializer = serializers.RolesSerializer(objetos, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = serializers.RolesSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)

class UsuarioAPIView(APIView):
    def get(self, request):
        objetos = models.Usuarios.objects.all()
        serializer = serializers.UsuariosSerializer(objetos, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = serializers.UsuariosSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        print("errores de validación", serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)