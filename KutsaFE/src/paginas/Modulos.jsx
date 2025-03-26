import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/img/Kutsa-logo.png";
import { FiMenu, FiX } from "react-icons/fi"; // Iconos de menú

const Modulos = () => {
  const [menuOpen, setMenuOpen] = useState(true); // Estado para mostrar el menú lateral

  return (
    <div className="flex h-screen">
      {/* Menú lateral */}
      <aside className={`bg-[#2607F2] w-64 min-h-full transition-all ${menuOpen ? "block" : "hidden"} md:block`}>
        <div className="flex flex-col items-center py-4">
          <img src={logo} alt="Kutsa Logo" className="h-16 w-auto mb-4" />
          
          <NavLink to="/modulos" className="p-3 bg-[#7407F2] text-white w-11/12 text-center rounded-lg mb-2">
            MÓDULOS
          </NavLink>
          <NavLink to="/clasificacion" className="p-3 bg-white text-[#2607F2] w-11/12 text-center rounded-lg mb-2">
            CLASIFICACIÓN
          </NavLink>
          <NavLink to="/desafios" className="p-3 bg-white text-[#2607F2] w-11/12 text-center rounded-lg mb-2">
            DESAFÍOS
          </NavLink>
          <NavLink to="/perfil" className="p-3 bg-white text-[#2607F2] w-11/12 text-center rounded-lg">
            PERFIL
          </NavLink>
        </div>
      </aside>

      {/* Contenido principal */}
      <div className="flex-1 bg-[#EDEDED] p-6">
        {/* Botón para desplegar menú */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 bg-[#7407F2] text-white rounded-md">
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        <h1 className="text-3xl font-bold text-center text-[#2607F2]">Sección 1</h1>
        {/* Aquí puedes colocar el contenido de los módulos */}
      </div>
    </div>
  );
};

export default Modulos;
