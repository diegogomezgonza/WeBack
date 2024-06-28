import React from 'react';

const Album: React.FC = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      <section>
        <div className="album">
          <div className="responsive-container-block bg">
            <div className="responsive-container-block img-cont">
              <img
                className="img"
                src="https://picsum.photos/600/2000?random=6"
                alt="Gallery Image"
              />
            </div>
            <div className="responsive-container-block img-cont">
              <img
                className="img"
                src="https://picsum.photos/1600/2400?random=2"
                alt="Gallery Image"
              />
              <img
                className="img img-last"
                src="https://picsum.photos/2400/1000?random=5"
                alt="Gallery Image"
              />
              <img
                className="img"
                src="https://picsum.photos/1400/1600?random=7"
                alt="Gallery Image"
              />
            </div>
            <div className="responsive-container-block img-cont">
              <img
                className="img img-last"
                src="https://picsum.photos/1200/600?random=3"
                alt="Gallery Image"
              />
              <img
                className="img"
                src="https://picsum.photos/2800/800?random=8"
                alt="Gallery Image"
              />
              <img
                className="img"
                src="https://picsum.photos/1400/1600?random=9"
                alt="Gallery Image"
              />
              <img
                className="img"
                src="https://picsum.photos/1400/1600?random=10"
                alt="Gallery Image"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Album;
