import React from 'react';

const Album: React.FC = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      <section>
        <div className="album">
          <div className="responsive-container-block bg">
            <div className="responsive-container-block img-cont">
              <div className="img-wrapper">
                <img
                  className="img"
                  src="https://picsum.photos/600/2000?random=6"
                  alt="Gallery Image"
                />
                <div className="img-overlay">
                  <span className="img-title">Image 1</span>
                  <span className="img-plus" onClick={() => alert("Añadida a la galería")}>
                    +
                  </span>
                </div>
              </div>
            </div>
            <div className="responsive-container-block img-cont">
              <div className="img-wrapper">
                <img
                  className="img"
                  src="https://picsum.photos/1600/2400?random=2"
                  alt="Gallery Image"
                />
                <div className="img-overlay">
                  <span className="img-title">Image 2</span>
                  <span className="img-plus" onClick={() => alert("Añadida a la galería")}>
                    +
                  </span>
                </div>
              </div>
              <div className="img-wrapper">
                <img
                  className="img img-last"
                  src="https://picsum.photos/2400/1000?random=5"
                  alt="Gallery Image"
                />
                <div className="img-overlay">
                  <span className="img-title">Image 3</span>
                  <span className="img-plus" onClick={() => alert("Añadida a la galería")}>
                    +
                  </span>
                </div>
              </div>
              <div className="img-wrapper">
                <img
                  className="img"
                  src="https://picsum.photos/1400/1600?random=7"
                  alt="Gallery Image"
                />
                <div className="img-overlay">
                  <span className="img-title">Image 4</span>
                  <span className="img-plus" onClick={() => alert("Añadida a la galería")}>
                    +
                  </span>
                </div>
              </div>
            </div>
            <div className="responsive-container-block img-cont">
              <div className="img-wrapper">
                <img
                  className="img img-last"
                  src="https://picsum.photos/1200/600?random=3"
                  alt="Gallery Image"
                />
                <div className="img-overlay">
                  <span className="img-title">Image 5</span>
                  <span className="img-plus" onClick={() => alert("Añadida a la galería")}>
                    +
                  </span>
                </div>
              </div>
              <div className="img-wrapper">
                <img
                  className="img"
                  src="https://picsum.photos/2800/800?random=8"
                  alt="Gallery Image"
                />
                <div className="img-overlay">
                  <span className="img-title">Image 6</span>
                  <span className="img-plus" onClick={() => alert("Añadida a la galería")}>
                    +
                  </span>
                </div>
              </div>
              <div className="img-wrapper">
                <img
                  className="img"
                  src="https://picsum.photos/1400/1600?random=9"
                  alt="Gallery Image"
                />
                <div className="img-overlay">
                  <span className="img-title">Image 7</span>
                  <span className="img-plus" onClick={() => alert("Añadida a la galería")}>
                    +
                  </span>
                </div>
              </div>
              <div className="img-wrapper">
                <img
                  className="img"
                  src="https://picsum.photos/1400/1600?random=10"
                  alt="Gallery Image"
                />
                <div className="img-overlay">
                  <span className="img-title">Image 8</span>
                  <span className="img-plus" onClick={() => alert("Añadida a la galería")}>
                    +
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Album;
