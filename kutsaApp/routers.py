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
    path('categotias/', CategoriaAPIView.as_view(), name='Categoria'),
    path('cursos/', CursoAPIView.as_view(), name='Cursos'),
    path('detallecontenido/', DetalleContenidoAPIView.as_view(), name='DetalleCurso'),
    path('detallecuso/', DetalleCursoAPIView.as_view(), name='DetalleCurso'),
    path('foro/', ForoAPIView.as_view(), name='Foro'),
    path('modulos/', ModulosAPIView.as_view(), name='Modulos'),
    path('quiz/', QuizAPIView.as_view(), name='Quiz'),
    path('rol/', RolesAPIView.as_view(), name='Roles'),
    path('usuarios/', UsuarioAPIView.as_view(), name='Usuarios'),
]
