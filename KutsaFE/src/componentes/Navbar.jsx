import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/img/Kutsa-logo.png";

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  // 🔄 Función para manejar clic en el logo y recargar la página
  const handleLogoClick = () => {
    navigate("/", { replace: true });
    window.location.reload();
  };

  // 🔑 Función para iniciar sesión (Simulación)
  const handleLogin = () => {
    setIsAuthenticated(true); // Actualiza el estado de autenticación
    navigate("/modulos"); // Redirige a la página de módulos
  };

  // 🔓 Función para cerrar sesión
  const handleLogout = () => {
    setIsAuthenticated(false); // Cambia el estado a no autenticado
    navigate("/"); // Redirige a la página de inicio
  };

  // 🚫 Si el usuario está autenticado, no mostrar el Navbar
  if (isAuthenticated) return null;

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#2607F2] p-4 pr-10 flex items-center justify-between shadow-lg z-50">
      {/* 🖼️ Logo */}
      <div className="ml-10 cursor-pointer" onClick={handleLogoClick}>
        <img src={logo} alt="Logo" className="h-14 w-auto" />
      </div>

      {/* 📱 Menú en pantallas grandes */}
      <div className="hidden md:flex items-center space-x-8">
        {["Inicio", "Nosotros"].map((item) => (
          <NavLink
            key={item}
            to={`/${item.toLowerCase()}`}
            className={({ isActive }) =>
              `px-5 py-2 rounded-full font-bold transition-all duration-300 shadow-md ${
                isActive
                  ? "bg-[#7407F2] text-white shadow-[inset_3px_3px_5px_rgba(0,0,0,0.2),_3px_3px_5px_rgba(255,255,255,0.3)]"
                  : "bg-[#D3D3D3] text-[#2607F2] shadow-[3px_3px_5px_rgba(0,0,0,0.2),_inset_-3px_-3px_5px_rgba(255,255,255,0.3)]"
              } hover:bg-[#A9A9A9] hover:text-white hover:shadow-[0px_0px_12px_rgba(255,255,255,0.8)] active:scale-95`
            }
          >
            {item}
          </NavLink>
        ))}

        {/* 🔑 Botón de autenticación */}
        <div className="ml-24 mr-16">
          <NavLink
            to="/iniciar-sesion"
            onClick={handleLogin}
            className={({ isActive }) =>
              `px-6 py-2 rounded-full font-bold transition-all duration-300 shadow-md ${
                isActive
                  ? "bg-[#7407F2] text-white shadow-[inset_3px_3px_5px_rgba(0,0,0,0.2),_3px_3px_5px_rgba(255,255,255,0.3)]"
                  : "bg-[#D3D3D3] text-[#2607F2] shadow-[3px_3px_5px_rgba(0,0,0,0.2),_inset_-3px_-3px_5px_rgba(255,255,255,0.3)]"
              } hover:bg-[#A9A9A9] hover:text-white hover:shadow-[0px_0px_12px_rgba(255,255,255,0.8)] active:scale-95`
            }
          >
            Iniciar Sesión
          </NavLink>
        </div>
      </div>

      {/* 🍔 Menú Hamburguesa para móviles */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`p-2 rounded-lg transition-all duration-300 ${
            menuOpen ? "bg-[#2607F2]" : "bg-[#7407F2]"
          }`}
        >
          {menuOpen ? <FiX size={30} color="white" /> : <FiMenu size={30} color="white" />}
        </button>
      </div>

      {/* 📜 Menú desplegable en móviles */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#2607F2] flex flex-col items-center space-y-4 py-4 shadow-lg md:hidden">
          {["Inicio", "Nosotros"].map((item) => (
            <NavLink
              key={item}
              to={`/${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `text-lg font-bold py-2 px-6 rounded-full transition-all duration-300 shadow-md ${
                  isActive
                    ? "bg-[#7407F2] text-white shadow-[inset_3px_3px_5px_rgba(0,0,0,0.2),_3px_3px_5px_rgba(255,255,255,0.3)]"
                    : "bg-white text-[#2607F2] shadow-[3px_3px_5px_rgba(0,0,0,0.2),_inset_-3px_-3px_5px_rgba(255,255,255,0.3)]"
                } hover:bg-[#A9A9A9] hover:text-[#2607F2] hover:shadow-white hover:shadow-xl active:scale-95`
              }
            >
              {item}
            </NavLink>
          ))}

          {/* 🔑 Botón de autenticación en móviles */}
          <NavLink
            to="/iniciar-sesion"
            onClick={() => {
              setMenuOpen(false);
              handleLogin();
            }}
            className="text-lg font-bold py-2 px-6 rounded-full bg-white text-[#2607F2] shadow-md hover:bg-[#A9A9A9] hover:text-[#2607F2]"
          >
            Iniciar Sesión
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
