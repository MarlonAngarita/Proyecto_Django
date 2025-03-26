import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-64 bg-blue-800 text-white min-h-screen p-4">
      {/* Logo */}
      <div className="flex items-center justify-center mb-6">
        <img src="/logo.png" alt="Logo" className="w-20" />
      </div>

      {/* Menú de navegación */}
      <nav className="flex flex-col gap-4">
        <NavLink to="/modulos" className="bg-purple-600 p-3 rounded-lg text-center">MÓDULOS</NavLink>
        <NavLink to="/clasificacion" className="bg-white text-blue-800 p-3 rounded-lg text-center">CLASIFICACIÓN</NavLink>
        <NavLink to="/desafios" className="bg-white text-blue-800 p-3 rounded-lg text-center">DESAFÍOS</NavLink>
        <NavLink to="/perfil" className="bg-white text-blue-800 p-3 rounded-lg text-center">PERFIL</NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;
