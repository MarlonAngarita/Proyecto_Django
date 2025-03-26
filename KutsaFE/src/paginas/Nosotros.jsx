import ContenedorPagina from "../componentes/ContenedorPagina";
// Importamos las imágenes desde la carpeta de assets
import OsoSolo from "../assets/img/Oso solo.png";
import Gata from "../assets/img/gata.png";
import Zorra from "../assets/img/zorra.png";

const Nosotros = () => {
    return (
        <ContenedorPagina>
            {/* Sección de Introducción */}
            <div className="relative flex flex-col items-center gap-4 px-6 py-6">
                <div className="flex items-center max-w-4xl w-full gap-4">
                    {/* Contenedor de texto más ancho */}
                    <div className="bg-[#A343DE] text-white p-6 rounded-lg w-full shadow-lg text-center">
                        <p className="text-lg font-semibold">
                            Somos una empresa desarrolladora de software, que permite mediante módulos didácticos y/o lúdicos fortalecer las habilidades blandas que se apunta en la idea principal, apostando a un entorno amigable para el usuario y que genera estímulos necesarios para adoptar dichas habilidades.
                        </p>
                    </div>
                    {/* Imagen alineada a la derecha */}
                    <img src={OsoSolo} alt="Oso con signo de pregunta" className="w-40 h-42 ml-4"/>
                </div>
            </div>

            {/* Sección de Misión */}
            <div className="relative flex flex-col items-center gap-4 px-6 py-6">
                <div className="flex items-center max-w-4xl w-full gap-4">
                    {/* Imagen más pegada al contenedor */}
                    <img src={Gata} alt="Gata" className="w-40 h-36 mr-2"/>
                    {/* Contenedor de texto más ancho */}
                    <div className="bg-[#2607F2] text-white p-6 rounded-lg w-full text-center shadow-lg">
                        <h2 className="text-xl font-bold">Misión:</h2>
                        <p className="text-lg">
                            Queremos entregar las herramientas necesarias para tener fundamentos en programación trabajando sobre un contenido lúdico y preciso que permita desarrollarlas de forma sencilla y que a su vez genere un pensamiento lógico, crítico y analítico.
                        </p>
                    </div>
                </div>
            </div>

            {/* Sección de Visión */}
            <div className="relative flex flex-col items-center gap-4 px-6 py-6">
                <div className="flex items-center max-w-4xl w-full gap-4">
                    {/* Contenedor de texto más ancho */}
                    <div className="bg-[#8A2BE2] text-white p-6 rounded-lg w-full text-center shadow-lg">
                        <h2 className="text-xl font-bold">Visión:</h2>
                        <p className="text-lg">
                            Nuestro enfoque es permitir la autonomía del conocimiento, que durante el proceso formativo y las didácticas de educación que manejaremos, los usuarios puedan ser capaces de identificar en su entorno formas más fáciles para la solución de problemáticas y que a su vez les brinde la oportunidad de mejores trabajos.
                        </p>
                    </div>
                    {/* Imagen alineada a la derecha */}
                    <img src={Zorra} alt="Zorra" className="w-40 h-36 ml-4"/>
                </div>
            </div>
        </ContenedorPagina>
    );
};

export default Nosotros;
