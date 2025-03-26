import { Routes, Route } from "react-router-dom"; // Importamos Routes y Route para manejar las rutas
import Inicio from "../paginas/Inicio"; // Página de inicio
import Nosotros from "../paginas/Nosotros"; // Página de nosotros
import IniciarSesion from "../paginas/IniciarSesion"; // Página de inicio de sesión
import Registro from "../paginas/Registro"; // Página de registro
import Modulos from "../paginas/Modulos"; // Importamos la nueva página de Módulos
import NoEncontrado from "../paginas/NoEncontrado"; // Página 404 para rutas no existentes

const AppRutas = () => {
  return (
    <Routes>
      {/* Ruta de la página de inicio */}
      <Route path="/" element={<Inicio />} />

      <Route path="/Inicio" element={<Inicio />} />

      {/* Ruta de la página "Nosotros" */}
      <Route path="/nosotros" element={<Nosotros />} />

      {/* Ruta para iniciar sesión */}
      <Route path="/iniciar-sesion" element={<IniciarSesion />} />

      {/* Ruta para registrarse */}
      <Route path="/comenzar" element={<Registro />} />

      {/* ✅ Nueva ruta para la página "Módulos" */}
      <Route path="/modulos" element={<Modulos />} />

      {/* Ruta para páginas no encontradas */}
      <Route path="*" element={<NoEncontrado />} />
    </Routes>
  );
};

export default AppRutas;
