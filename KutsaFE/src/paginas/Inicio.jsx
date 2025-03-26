import { Link } from "react-router-dom";
import grupis from "../assets/img/grupis.png"; // Importamos la imagen de la página de inicio

function Inicio() {
  return (
    // Sección principal centrada y sin desbordamiento
    <section className="flex flex-col md:flex-row items-center justify-center min-h-[80vh] px-6 text-center w-full max-w-screen overflow-hidden">
      
      {/* Contenedor de imagen y texto, centrado */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl gap-10">
        
        {/* Imagen centrada y ajustada para evitar desbordamientos */}
        <div className="w-full md:w-2/5 flex justify-center">
          <img 
            src={grupis} 
            alt="Grupo de personajes" 
            className="w-[90%] md:w-[40vw] max-w-2xl"
          />
        </div>

        {/* Contenedor de texto centrado */}
        <div className="w-full md:w-3/5 flex flex-col items-center">
          
          {/* Título centrado correctamente */}
          <h1 
            className="text-5xl md:text-7xl font-navbar font-bold text-purple-700 mb-6 text-3d">
            ¡Programar nunca fue tan fácil!
          </h1>

          {/* Botón con la misma fuente y efecto de resaltado */}
          <Link
            to="/comenzar"
            className="bg-[#7407F2] text-white text-lg font-navbar font-bold py-3 px-6 rounded-full shadow-lg 
            transition-all duration-300 ease-in-out hover:bg-purple-700 hover:shadow-purple-400 hover:shadow-xl transform hover:scale-105"
            >Comienza Aquí 👉
          </Link>
        </div>

      </div>
    </section>
  );
}

export default Inicio;
