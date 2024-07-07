import React from "react";

// Definición del tipo de las props para incluir la función closeModal
interface RegisterProps {
  closeModal: () => void;
}

const Register: React.FC<RegisterProps> = ({ closeModal }) => {
  return (
    // Modal de registro
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded shadow-md w-96 relative">
        {/* Botón de cierre */}
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        <h2 className="text-2xl mb-6 text-center">Sign up</h2>
        <form>
          {/* Nombre de usuario */}
          <div className="mb-4">
            <label
              htmlFor="user"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Nombre de usuario
            </label>
            <input
              type="text"
              id="user"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Correo */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Contraseña */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Registrarme
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
