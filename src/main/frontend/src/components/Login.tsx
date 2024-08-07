import React, { useState } from "react";
import Password from "./RecoverPassword";
import Register from "./Register";

// Definición del tipo de las props para incluir la función closeModal
interface LoginProps {
  closeModal: () => void;
}

const Login: React.FC<LoginProps> = ({ closeModal }) => {
  // Estado del modal de registro
  const [showUserModal, setShowUserModal] = useState(false);

  // Estado del modal de contraseña
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  // Función para abrir el modal de registro
  const openUserModal = () => {
    setShowUserModal(true);
  };

  // Función para cerrar el modal de registro
  const closeUserModal = () => {
    setShowUserModal(false);
  };

  // Función para abrir el modal de recuperar contraseña
  const openPasswordModal = () => {
    setShowPasswordModal(true);
  };

  // Función para cerrar el modal de recuperar contraseña
  const closePasswordModal = () => {
    setShowPasswordModal(false);
  };

  return (
    // Modal de login
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded shadow-md w-96 relative">
        {/* Botón de cierre */}
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        <h2 className="text-2xl mb-6 text-center">Login</h2>
        <form>
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
            Iniciar Sesión
          </button>
        </form>

        {/* No tengo cuenta de usuario */}
        <p
          className="text-green-500 text-sm mt-4 text-center cursor-pointer hover:underline"
          onClick={openUserModal}
        >
          No tengo cuenta de usuario
        </p>

        {/* He olvidado mi contraseña */}
        <p
          className="text-yellow-500 text-sm mt-4 text-center cursor-pointer hover:underline"
          onClick={openPasswordModal}
        >
          He olvidado mi contraseña
        </p>

        {/* Modal para recuperar contraseña */}
        {showPasswordModal && <Password closeModal={closePasswordModal} />}

        {/* Modal para registro */}
        {showUserModal && <Register closeModal={closeUserModal} />}
      </div>
    </div>
  );
};

export default Login;
