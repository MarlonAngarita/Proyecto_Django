# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class AuthGroup(models.Model):
    name = models.CharField(unique=True, max_length=150)

    class Meta:
        managed = True
        db_table = 'auth_group'


class AuthGroupPermissions(models.Model):
    id = models.BigAutoField(primary_key=True)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)
    permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)

    class Meta:
        managed = True
        db_table = 'auth_group_permissions'
        unique_together = (('group', 'permission'),)


class AuthPermission(models.Model):
    name = models.CharField(max_length=255)
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING)
    codename = models.CharField(max_length=100)

    class Meta:
        managed = True
        db_table = 'auth_permission'
        unique_together = (('content_type', 'codename'),)


class AuthUser(models.Model):
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.IntegerField()
    username = models.CharField(unique=True, max_length=150)
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    email = models.CharField(max_length=254)
    is_staff = models.IntegerField()
    is_active = models.IntegerField()
    date_joined = models.DateTimeField()

    class Meta:
        managed = True
        db_table = 'auth_user'


class AuthUserGroups(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)

    class Meta:
        managed = True
        db_table = 'auth_user_groups'
        unique_together = (('user', 'group'),)


class AuthUserUserPermissions(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    permission = models.ForeignKey(AuthPermission, models.DO_NOTHING)

    class Meta:
        managed = True
        db_table = 'auth_user_user_permissions'
        unique_together = (('user', 'permission'),)


class Biblioteca(models.Model):
    id_biblioteca = models.AutoField(primary_key=True)
    nombre_biblioteca = models.CharField(max_length=45)
    contenido_biblioteca = models.CharField(max_length=45)
    descripcion_biblioteca = models.CharField(max_length=45)

    class Meta:
        managed = True
        db_table = 'biblioteca'


class Categoria(models.Model):
    id_categoria = models.AutoField(primary_key=True)
    tipo_categoria = models.CharField(max_length=45)
    cursos_id_curso = models.ForeignKey('Cursos', models.DO_NOTHING, db_column='cursos_id_curso')
    foro_id_foro = models.ForeignKey('Foro', models.DO_NOTHING, db_column='foro_id_foro')

    class Meta:
        managed = True
        db_table = 'categoria'


class Cursos(models.Model):
    id_curso = models.AutoField(primary_key=True)
    nombre_curso = models.CharField(max_length=45)
    descripcion_curso = models.CharField(max_length=45)
    contenido_curso = models.CharField(max_length=45)

    class Meta:
        managed = True
        db_table = 'cursos'


class DetalleContenido(models.Model):
    id_detalle_contenido = models.AutoField(primary_key=True)
    biblioteca_id_biblioteca = models.ForeignKey(Biblioteca, models.DO_NOTHING, db_column='biblioteca_id_biblioteca')
    modulos_id_modulo = models.ForeignKey('Modulos', models.DO_NOTHING, db_column='modulos_id_modulo')

    class Meta:
        managed = True
        db_table = 'detalle_contenido'


class DetalleCurso(models.Model):
    id_detalle_curso = models.AutoField(primary_key=True)
    quiz_id_quiz = models.ForeignKey('Quiz', models.DO_NOTHING, db_column='quiz_id_quiz')
    usuarios_id_usuario = models.ForeignKey('Usuarios', models.DO_NOTHING, db_column='usuarios_id_usuario')
    modulos_id_modulo = models.ForeignKey('Modulos', models.DO_NOTHING, db_column='modulos_id_modulo')
    cursos_id_curso = models.ForeignKey(Cursos, models.DO_NOTHING, db_column='cursos_id_curso')

    class Meta:
        managed = True
        db_table = 'detalle_curso'


class DjangoAdminLog(models.Model):
    action_time = models.DateTimeField()
    object_id = models.TextField(blank=True, null=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.PositiveSmallIntegerField()
    change_message = models.TextField()
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING, blank=True, null=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)

    class Meta:
        managed = True
        db_table = 'django_admin_log'


class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = True
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)


class DjangoMigrations(models.Model):
    id = models.BigAutoField(primary_key=True)
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = True
        db_table = 'django_migrations'


class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

    class Meta:
        managed = True
        db_table = 'django_session'


class Foro(models.Model):
    id_foro = models.AutoField(primary_key=True)
    nombre_foro = models.CharField(max_length=45)
    descripcion_foro = models.CharField(max_length=45)
    respuesta_foro = models.CharField(max_length=45)

    class Meta:
        managed = True
        db_table = 'foro'


class Modulos(models.Model):
    id_modulo = models.AutoField(primary_key=True)
    nombre_modulo = models.CharField(max_length=45)
    contenido_modulo = models.CharField(max_length=45)
    descripcion_modulo = models.CharField(max_length=45)

    class Meta:
        managed = True
        db_table = 'modulos'


class Quiz(models.Model):
    id_quiz = models.AutoField(primary_key=True)
    nombre_quiz = models.CharField(max_length=45)
    descripcion_quiz = models.CharField(max_length=45)
    calificacion_quiz = models.CharField(max_length=45)
    actividad_quiz = models.CharField(max_length=45)

    class Meta:
        managed = True
        db_table = 'quiz'


class Roles(models.Model):
    id_rol = models.AutoField(primary_key=True)
    nombre_rol = models.CharField(max_length=45)

    class Meta:
        managed = True
        db_table = 'roles'


class Usuarios(models.Model):
    id_usuario = models.AutoField(primary_key=True)
    nombre_usuario = models.CharField(max_length=45)
    apellido_usuario = models.CharField(max_length=45)
    correo_usuario = models.CharField(max_length=45)
    contraseña_usuario = models.CharField(max_length=8)
    cedula_usuario = models.CharField(max_length=45)
    roles_id_rol = models.ForeignKey(Roles, models.DO_NOTHING, db_column='roles_id_rol')

    class Meta:
        managed = True
        db_table = 'usuarios'
