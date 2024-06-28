import React, { useState } from 'react';

const Album: React.FC = () => {
  const [clickedImages, setClickedImages] = useState<{ [key: number]: boolean }>({});

  const handleImageClick = (index: number) => {
    setClickedImages({ ...clickedImages, [index]: true });
    setTimeout(() => {
      setClickedImages({ ...clickedImages, [index]: false });
    }, 2000); // Oculta el mensaje después de 2 segundos
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <section>
        <div className="album">
          <div className="responsive-container-block bg">
            <div className="responsive-container-block img-cont">
              <div className="img-wrapper" onClick={() => handleImageClick(1)}>
                <img
                  className="img"
                  src="https://picsum.photos/600/2000?random=6"
                  alt="Gallery Image 1"
                />
                <div className="img-overlay">
                  <span className="img-title">Image 1</span>
                  <span className="img-plus">+</span>
                </div>
                {clickedImages[1] && <div className="img-message">Añadida a la galería</div>}
              </div>
            </div>
            <div className="responsive-container-block img-cont">
              <div className="img-wrapper" onClick={() => handleImageClick(2)}>
                <img
                  className="img"
                  src="https://picsum.photos/1600/2400?random=2"
                  alt="Gallery Image 2"
                />
                <div className="img-overlay">
                  <span className="img-title">Image 2</span>
                  <span className="img-plus">+</span>
                </div>
                {clickedImages[2] && <div className="img-message">Añadida a la galería</div>}
              </div>
              <div className="img-wrapper" onClick={() => handleImageClick(3)}>
                <img
                  className="img img-last"
                  src="https://picsum.photos/2400/1000?random=5"
                  alt="Gallery Image 3"
                />
                <div className="img-overlay">
                  <span className="img-title">Image 3</span>
                  <span className="img-plus">+</span>
                </div>
                {clickedImages[3] && <div className="img-message">Añadida a la galería</div>}
              </div>
              <div className="img-wrapper" onClick={() => handleImageClick(4)}>
                <img
                  className="img"
                  src="https://picsum.photos/1400/1600?random=7"
                  alt="Gallery Image 4"
                />
                <div className="img-overlay">
                  <span className="img-title">Image 4</span>
                  <span className="img-plus">+</span>
                </div>
                {clickedImages[4] && <div className="img-message">Añadida a la galería</div>}
              </div>
            </div>
            <div className="responsive-container-block img-cont">
              <div className="img-wrapper" onClick={() => handleImageClick(5)}>
                <img
                  className="img img-last"
                  src="https://picsum.photos/1200/600?random=3"
                  alt="Gallery Image 5"
                />
                <div className="img-overlay">
                  <span className="img-title">Image 5</span>
                  <span className="img-plus">+</span>
                </div>
                {clickedImages[5] && <div className="img-message">Añadida a la galería</div>}
              </div>
              <div className="img-wrapper" onClick={() => handleImageClick(6)}>
                <img
                  className="img"
                  src="https://picsum.photos/2800/800?random=8"
                  alt="Gallery Image 6"
                />
                <div className="img-overlay">
                  <span className="img-title">Image 6</span>
                  <span className="img-plus">+</span>
                </div>
                {clickedImages[6] && <div className="img-message">Añadida a la galería</div>}
              </div>
              <div className="img-wrapper" onClick={() => handleImageClick(7)}>
                <img
                  className="img"
                  src="https://picsum.photos/1400/1600?random=9"
                  alt="Gallery Image 7"
                />
                <div className="img-overlay">
                  <span className="img-title">Image 7</span>
                  <span className="img-plus">+</span>
                </div>
                {clickedImages[7] && <div className="img-message">Añadida a la galería</div>}
              </div>
              <div className="img-wrapper" onClick={() => handleImageClick(8)}>
                <img
                  className="img"
                  src="https://picsum.photos/1400/1600?random=10"
                  alt="Gallery Image 8"
                />
                <div className="img-overlay">
                  <span className="img-title">Image 8</span>
                  <span className="img-plus">+</span>
                </div>
                {clickedImages[8] && <div className="img-message">Añadida a la galería</div>}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Album;
