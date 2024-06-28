import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="bg-white">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="font-benchnine font-bold text-3xl">WE BACK</h1>
        <nav>
          <ul className="flex space-x-4 gap-4">
            <li>
              <Link to="/gallery">
                <img src={`gallery.png`} alt="Galería" className="h-10 w-10" />
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <img src={`contact.png`} alt="Contacto" className="h-10 w-10" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
