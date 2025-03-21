from django.urls import path
from kutsaApp.views import BibliotecaAPIView
from kutsaApp.views import CategoriaAPIView
from kutsaApp.views import CursoAPIView
from kutsaApp.views import DetalleContenidoAPIView
from kutsaApp.views import DetalleCursoAPIView
from kutsaApp.views import ForoAPIView
from kutsaApp.views import ModulosAPIView
from kutsaApp.views import QuizAPIView
from kutsaApp.views import RolesAPIView
from kutsaApp.views import UsuarioAPIView


app_routes = [
    path('biblioteca/', BibliotecaAPIView.as_view(), name='Biblioteca'),
    path('categotias/', CategoriaAPIView, name='Categoria'),
    path('cursos/', CursoAPIView, name='Cursos'),
    path('detallecontenido/', DetalleContenidoAPIView, name='DetalleCurso'),
    path('detallecuso/', DetalleCursoAPIView, name='DetalleCurso'),
    path('foro/', ForoAPIView, name='Foro'),
    path('modulos/', ModulosAPIView, name='Modulos'),
    path('quiz/', QuizAPIView, name='Quiz'),
    path('rol/', RolesAPIView, name='Roles'),
    path('usuarios/', UsuarioAPIView, name='Usuarios'),
]
