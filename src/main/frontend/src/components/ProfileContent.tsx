import React from 'react';

const ProfileContent: React.FC = () => {
  return (
    <div className="flex justify-center items-start mt-16 sm:mt-24">
      <div className="flex flex-col items-center space-y-4 sm:space-y-6">
        <div className="w-24 h-24 bg-gray-300 rounded-full"></div>
        <h1 className="text-2xl font-bold text-gray-700">diego</h1>
        <p className="text-center text-gray-600 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
          Aquí va una breve descripción del usuario. Puede contener información sobre intereses, hobbies, profesión, o cualquier otra cosa que el usuario quiera compartir.
        </p>
        <button className="px-4 py-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          Editar Perfil
        </button>
      </div>
    </div>
  );
};

export default ProfileContent;
