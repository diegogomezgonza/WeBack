import React from "react";

interface PasswordProps {
  closeModal: () => void;
}

const Password: React.FC<PasswordProps> = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded shadow-md w-96 relative">
        {/* Botón de cierre */}
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        {/* Título */}
        <h2 className="text-2xl mb-6 text-center">Recuperar Contraseña</h2>
        <form>
          {/* Correo */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Submit */}
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Password;
