import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc"; // Icono de Google

const Registro = () => {
  const navigate = useNavigate(); // Hook para navegar entre páginas

  // Estado para manejar los datos del formulario
  const [formData, setFormData] = useState({
    nombres: "",
    apellidos: "",
    nombreUsuario: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Estados para manejar errores en la contraseña
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  // Estados para mostrar/ocultar contraseña
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Limita la contraseña a 15 caracteres
    if ((name === "password" || name === "confirmPassword") && value.length > 15) return;

    setFormData({ ...formData, [name]: value });

    // Validar contraseñas en tiempo real
    if (name === "password") validarPassword(value);
    if (name === "confirmPassword") validarConfirmPassword(value);
  };

  // Validar la contraseña
  const validarPassword = (password) => {
    // Expresión regular: mínimo 8, máximo 15 caracteres, al menos una letra, un número y un carácter especial
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]).{8,15}$/;
    setErrorPassword(regex.test(password) ? "" : "Debe tener entre 8 y 15 caracteres, incluir al menos una letra, un número y un carácter especial.");
  };

  // Validar la confirmación de contraseña
  const validarConfirmPassword = (confirmPassword) => {
    setErrorConfirmPassword(confirmPassword !== formData.password ? "Las contraseñas no coinciden." : "");
  };

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Si hay errores en las contraseñas, no enviar el formulario
    if (errorPassword || errorConfirmPassword) {
      alert("Corrige los errores antes de continuar.");
      return;
    }

    alert("Registro exitoso"); // Mensaje de confirmación

    // Redirigir a la página de inicio de sesión después de 0.5 segundos
    setTimeout(() => {
      navigate("/iniciar-sesion");
    }, 500);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        
        {/* Título */}
        <h2 className="text-4xl font-bold text-center text-[#2607F2] mb-6">Crea tu cuenta</h2>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Campo: Nombres */}
          <div>
            <label className="block text-gray-700 font-semibold">Nombres</label>
            <input type="text" name="nombres" value={formData.nombres} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded mt-1" placeholder="Nombres" />
          </div>

          {/* Campo: Apellidos */}
          <div>
            <label className="block text-gray-700 font-semibold">Apellidos</label>
            <input type="text" name="apellidos" value={formData.apellidos} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded mt-1" placeholder="Apellidos" />
          </div>

          {/* Campo: Nombre de Usuario */}
          <div>
            <label className="block text-gray-700 font-semibold">Nombre de Usuario</label>
            <input type="text" name="nombreUsuario" value={formData.nombreUsuario} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded mt-1" placeholder="Usuario123" />
          </div>

          {/* Campo: Correo Electrónico */}
          <div>
            <label className="block text-gray-700 font-semibold">Correo Electrónico</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded mt-1" placeholder="tucorreo@example.com" />
          </div>

          {/* Campo: Contraseña */}
          <div>
            <label className="block text-gray-700 font-semibold">Contraseña</label>
            <div className="relative">
              <input type={showPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded mt-1 pr-10" placeholder="********" />
              <button type="button" className="absolute right-3 top-3 text-gray-600" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {errorPassword && <p className="text-red-500 text-sm mt-1">{errorPassword}</p>}
          </div>

          {/* Campo: Confirmar Contraseña */}
          <div>
            <label className="block text-gray-700 font-semibold">Confirmar Contraseña</label>
            <div className="relative">
              <input type={showConfirmPassword ? "text" : "password"} name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded mt-1 pr-10" placeholder="********" />
              <button type="button" className="absolute right-3 top-3 text-gray-600" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {errorConfirmPassword && <p className="text-red-500 text-sm mt-1">{errorConfirmPassword}</p>}
          </div>

          {/* Botón de registro */}
          <button type="submit" className="w-full bg-[#2607F2] text-white py-2 rounded-lg font-bold text-lg hover:bg-[#1d05c5] transition hover:shadow-xl active:scale-100">Registrarse</button>

          {/* Botón de iniciar sesión con Google */}
          <div className="text-center mt-4">
            <button className="bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg w-full flex items-center justify-center gap-2 hover:shadow-md active:scale-95">
              <FcGoogle size={20} />
              Iniciar sesión con Google
            </button>
            <p className="mt-4 text-gray-700">
              ¿Ya tienes una cuenta? <a href="/iniciar-sesion" className="text-blue-600 font-semibold">Inicia sesión aquí</a>
            </p>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Registro;
