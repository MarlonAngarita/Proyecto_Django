import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react"; // Íconos de ojo

const IniciarSesion = () => {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [mostrarContrasena, setMostrarContrasena] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const manejarInicioSesion = () => {
    if (!usuario || !contrasena) {
      setError("Por favor, ingresa usuario y contraseña.");
      return;
    }
    setError(""); // Limpiar error si todo está correcto
    console.log("Iniciando sesión con:", usuario, contrasena);
    navigate("/Modulos"); // Redirige a la página de contenido
  };

  return (
    <div className="flex flex-col items-center justify-center mt-5 mb-1">
      <div className="bg-purple-600 p-6 rounded-lg shadow-lg w-80 text-center">
        <div className="flex justify-center mb-4">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
            <span className="text-2xl">👤</span>
          </div>
        </div>

        <input
          type="text"
          placeholder="Usuario"
          className="w-full p-2 mb-4 rounded-md text-black"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />

        <div className="relative w-full">
          <input
            type={mostrarContrasena ? "text" : "password"}
            placeholder="Contraseña"
            className="w-full p-2 pr-10 rounded-md text-black"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
          />
          <button
            type="button"
            className="absolute inset-y-0 right-2 flex items-center text-gray-600"
            onClick={() => setMostrarContrasena(!mostrarContrasena)}
          >
            {mostrarContrasena ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        {error && <p className="text-red-400 mt-2">{error}</p>}

        <button
          onClick={manejarInicioSesion}
          className="bg-purple-800 text-white px-4 py-2 rounded-md w-full hover:bg-purple-900 mt-4"
        >
          INGRESAR
        </button>

        <p className="text-white mt-4 cursor-pointer" onClick={() => navigate("/recuperar")}>
          ¿Olvidaste la contraseña?
        </p>
        <p className="text-white mt-2 cursor-pointer" onClick={() => navigate("/comenzar")}>
          ¿No tienes una cuenta? Regístrate
        </p>
      </div>
    </div>
  );
};

export default IniciarSesion;
