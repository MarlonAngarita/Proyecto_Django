from rest_framework import serializers
from kutsaApp.modelos import models

class BibliotecaSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Biblioteca
        fields = '__all__'

class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Categoria
        fields = '__all__'

class CursosSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Cursos
        fields = '__all__'

class DetalleContenidoSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.DetalleContenido
        fields = '__all__'

class DetalleCursoSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.DetalleCurso
        fields = '__all__'

class ForoSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Foro
        fields = '__all__'

class ModulosSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Modulos
        fields = '__all__'

class QuizSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Quiz
        fields = '__all__'

class RolesSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Roles
        fields = '__all__'

class UsuariosSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Usuarios
        fields = '__all__'