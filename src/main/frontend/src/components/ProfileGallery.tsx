import React from 'react';

// Props para src y title
interface ImageItem {
  src: string;
  title: string;
}

// Lista de imágenes de ejemplo
const images: ImageItem[] = [
  { src: 'image1.jpg', title: 'Imagen 1' },
  { src: 'image2.jpg', title: 'Imagen 2' },
  { src: 'image3.jpg', title: 'Imagen 3' },
  { src: 'image4.jpg', title: 'Imagen 4' },
  { src: 'image5.jpg', title: 'Imagen 5' },
  { src: 'image6.jpg', title: 'Imagen 6' },
  { src: 'image7.jpg', title: 'Imagen 7' },
  { src: 'image8.jpg', title: 'Imagen 8' },
  { src: 'image9.jpg', title: 'Imagen 9' },
  { src: 'image10.jpg', title: 'Imagen 10' },
];

const ProfileGallery: React.FC = () => {
  return (
    // Contenedor principal con padding
    <div className="p-8">
      {/* Cuadrícula responsive que ajusta el número de columnas según el tamaño de pantalla */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {images.map((image, index) => (
          // Contenedor para cada imagen y su título
          <div key={index} className="flex flex-col items-center">
            {/* Imagen y título */}
            <img src="https://picsum.photos/1600/2400?random=2" alt={image.title} className="w-full h-auto object-cover rounded" />
            <p className="text-center mt-2 text-gray-700">{image.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileGallery;
