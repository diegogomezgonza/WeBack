import React from 'react';
// CSS general
import '../css/index.css';
// CSS home
import '../css/home.css';

const Home: React.FC = () => {
  return (
    <div>
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="font-benchnine font-bold text-3xl">WE BACK</h1>
          <nav>
            <ul className="flex space-x-4 font-rozha text-xl">
              <li>
                <a href="#" className="hover:text-yellow-500">
                  Inicio
                </a>
              </li>
              <li>
                <a href="gallery.html" className="hover:text-yellow-500">
                  Galería
                </a>
              </li>
              <li>
                <a href="contact.html" className="hover:text-yellow-500">
                  Contacto
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Gallery */}
        <section>
          <div className="album">
            <div className="responsive-container-block bg">
              <div className="responsive-container-block img-cont">
                <img
                  className="img"
                  src="https://picsum.photos/800/1200?random=1"
                  alt="Gallery Image"
                />
                <img
                  className="img"
                  src="https://picsum.photos/1600/2400?random=2"
                  alt="Gallery Image"
                />
                <img
                  className="img img-last"
                  src="https://picsum.photos/1200/600?random=3"
                  alt="Gallery Image"
                />
              </div>
              <div className="responsive-container-block img-cont">
                <img
                  className="img img-big"
                  src="https://picsum.photos/1000/2800?random=4"
                  alt="Gallery Image"
                />
                <img
                  className="img img-big img-last"
                  src="https://picsum.photos/2400/1000?random=5"
                  alt="Gallery Image"
                />
              </div>
              <div className="responsive-container-block img-cont">
                <img
                  className="img"
                  src="https://picsum.photos/600/2000?random=6"
                  alt="Gallery Image"
                />
                <img
                  className="img"
                  src="https://picsum.photos/1400/1600?random=7"
                  alt="Gallery Image"
                />
                <img
                  className="img"
                  src="https://picsum.photos/2800/800?random=8"
                  alt="Gallery Image"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
