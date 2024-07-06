import React, { useState } from "react";
import { Link } from "react-router-dom";

//Componentes
import Login from "./Login";

//Navbar
const Header: React.FC = () => {
  //El estado inicial del modal es false para que no se muestre
  const [isModalOpen, setIsModalOpen] = useState(false);

  //Abrir componente Login al hacer click en contact
  const handleContactClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    //Hago preventDefault ya que sino haría redirect a /contact
    event.preventDefault();
    //Cuando se ha hecho click, el estado del modal pasa a ser true para que se muestre
    setIsModalOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header className="bg-white fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        {/* Título */}
        <Link to="/">
          <h1 className="font-benchnine font-bold text-3xl">WE BACK</h1>
        </Link>
        <nav>
          <ul className="flex space-x-4 gap-4">
            <li>
              {/* Galería */}
              <Link to="/gallery">
                <img src={`gallery.png`} alt="Galería" className="h-10 w-10" />
              </Link>
            </li>
            <li>
              {/* Perfíl */}
              <Link to="/contact" onClick={handleContactClick}>
                <img src={`contact.png`} alt="Contacto" className="h-10 w-10" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {isModalOpen && <Login closeModal={closeModal} />}
    </header>
  );
};

export default Header;
