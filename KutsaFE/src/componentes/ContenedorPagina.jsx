import PropTypes from "prop-types";

const ContenedorPagina = ({ children }) => {
  return (
    <div className="flex flex-col min-h-[calc(100vh-80px)] px-4 pt-10 pb-8 bg-white">
      {children}
    </div>
  );
};

ContenedorPagina.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContenedorPagina;
