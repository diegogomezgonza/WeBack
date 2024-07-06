import React from "react";

const CollectionAlbum: React.FC = () => {
  const imageUrls = [
    "https://picsum.photos/600/2000?random=1",
    "https://picsum.photos/600/2000?random=2",
    "https://picsum.photos/600/2000?random=3",
    "https://picsum.photos/600/2000?random=4",
    "https://picsum.photos/600/2000?random=5",
    "https://picsum.photos/600/2000?random=6",
    "https://picsum.photos/600/2000?random=7",
    "https://picsum.photos/600/2000?random=8",
    "https://picsum.photos/600/2000?random=9",
    "https://picsum.photos/600/2000?random=10",
    "https://picsum.photos/600/2000?random=11",
    "https://picsum.photos/600/2000?random=12",
    "https://picsum.photos/600/2000?random=13",
    "https://picsum.photos/600/2000?random=14",
    "https://picsum.photos/600/2000?random=15"
  ];

  return (
    <main className="container mx-auto px-4 py-8">
      <section>
        {/* Título principal */}
        <h2 className="text-left text-3xl font-bold mb-4">Collection 1</h2>
        {/* Contenedor de la galería */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {imageUrls.map((url, index) => (
            <div key={index} className="relative">
              <img
                className="w-full h-auto"
                src={url}
                alt={`Gallery Image ${index + 1}`}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <span className="text-white text-lg">{`Image ${index + 1}`}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default CollectionAlbum;
