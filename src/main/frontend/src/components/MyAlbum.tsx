import React from "react";

const MyAlbum: React.FC = () => {
  const collections = [
    {
      title: "Colección 1",
      images: ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"],
    },
    {
      title: "Colección 2",
      images: ["img5.jpg", "img6.jpg", "img7.jpg", "img8.jpg"],
    },
    {
      title: "Colección 3",
      images: ["img9.jpg", "img10.jpg", "img11.jpg", "img12.jpg"],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {collections.map((collection, index) => (
          <div key={index} className="bg-white p-4 rounded shadow-md">
            <div className="grid grid-cols-2 gap-2 mb-4">
              {collection.images.map((image, imgIndex) => (
                <div key={imgIndex} className="w-full h-32 bg-gray-200">
                  <img
                    src="https://picsum.photos/600/2000?random=6"
                    alt={`Imagen ${imgIndex + 1}`}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
              ))}
            </div>
            <h3 className="text-center text-xl font-semibold">
              {collection.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAlbum;
