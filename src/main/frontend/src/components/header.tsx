import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="font-benchnine font-bold text-3xl">WE BACK</h1>
          <nav>
            <ul className="flex space-x-4 font-rozha text-xl gap-10">
            <li>
                <a href="gallery.html" className="hover:text-yellow-500">
                  <img
                    src={`gallery.png`}
                    alt="Galería"
                    className="h-10 w-10"
                  />
                </a>
              </li>
              <li>
                <a href="contact.html" className="hover:text-yellow-500">
                  <img
                    src={`contact.png`}
                    alt="Contacto"
                    className="h-10 w-10"
                  />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
  );
};

export default Header;
