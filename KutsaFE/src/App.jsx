import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import AppRutas from "./rutas/AppRutas";
import Footer from "./componentes/Footer";
import Navbar from "./componentes/Navbar";
import Sidebar from "./componentes/Sidebar"; // Importamos el Sidebar
import ContenedorPagina from "./componentes/ContenedorPagina";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Estado de autenticación

  return (
    <Router>
      <div className="flex min-h-screen bg-[#EDEDED] w-full">
        {/* Si el usuario está autenticado, mostramos el Sidebar en lugar del Navbar y Footer */}
        {isAuthenticated ? (
          <div className="flex w-full">
            <Sidebar /> {/* Menú lateral */}
            <main className="flex-grow p-4">
              <AppRutas isAuthenticated={isAuthenticated} />
            </main>
          </div>
        ) : (
          <div className="flex flex-col min-h-screen w-full">
            {/* Navbar solo si NO está autenticado */}
            <Navbar setIsAuthenticated={setIsAuthenticated} />

            {/* Contenido principal */}
            <main className="flex-grow flex flex-col mt-16">
              <ContenedorPagina>
                <AppRutas isAuthenticated={isAuthenticated} />
              </ContenedorPagina>
            </main>

            {/* Footer solo si NO está autenticado */}
            <Footer />
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
