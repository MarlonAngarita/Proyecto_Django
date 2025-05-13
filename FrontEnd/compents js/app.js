document.getElementById('form').addEventListener('submit', (event) => {
    event.preventDefault(); // Evita el envío predeterminado del formulario

        const rol = document.getElementById('rol');

       //validacion de rol
       if (rol){
        const seleccion = rol.value

        if (seleccion === 'estudiante'){
            rol_id = 1
        } else if (seleccion === 'profesor'){
            rol_id = 2
        }else{
            document.getElementById('registro').innerText = 'Elige un rol';
        }
    }

    
    // Obtener valores de los inputs
    const usuario ={
        nombre_usuario : document.getElementById('nombre_usuario').value,
        apellido_usuario : document.getElementById('apellido_usuario').value,
        correo_usuario : document.getElementById('correo_usuario').value,
        contraseña_usuario : document.getElementById('contraseña_usuario').value,
        cedula_usuario : document.getElementById('cedula_usuario').value,
        roles_id_rol : rol_id,
    }

 

    

    // Enviar los datos al servidor
    fetch('http://127.0.0.1:8000/usuarios/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(usuario),
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            console.log(data);
            document.getElementById('registro').innerText = "registrado";
        })
        .catch((error) => {
            console.error('Error:', error);
            // console.log(usuario)
            document.getElementById('registro').innerText = 'Error al registrar usuario.';
        });
});
