import Logo from "../assets/img/Kutsa-logo.png"; 
import { FaInstagram, FaXTwitter, FaFacebookF, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  const socialLinks = [
    { icon: <FaInstagram />, url: "https://www.instagram.com", color: "bg-purple-500" },
    { icon: <FaXTwitter />, url: "https://twitter.com", color: "bg-black" },
    { icon: <FaFacebookF />, url: "https://www.facebook.com", color: "bg-blue-500" },
    { icon: <FaYoutube />, url: "https://www.youtube.com", color: "bg-red-500" },
  ];

  return (
    <footer className="bg-[#1000ff] text-white py-6 w-screen">
      <div className="max-w-full mx-0 px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        
        {/* Logo alineado al inicio con un tamaño fijo */}
        <div className="ml-10">
          <img src={Logo} alt="Kutsa Logo" className="h-20 w-auto object-contain" />
        </div>

        {/* Derechos de autor centrados */}
        <div className="flex-grow w-full text-center">
          <p className="text-sm font-semibold">
            © 2025 Kutsart Code Web. Todos los derechos reservados.
          </p>
          <p className="text-sm">Julian Albarracín - Elaine Leal - Alejandra Caicedo - Marlon Gomez</p>
        </div>

        {/* Redes sociales alineadas a la derecha con espaciado correcto */}
        <div className="flex gap-4 mr-10">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-12 h-12 flex items-center justify-center text-white text-2xl rounded-full ${social.color} transition-all duration-300 transform hover:-translate-y-2 shadow-lg`}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
