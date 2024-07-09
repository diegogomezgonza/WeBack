import React, { useState } from "react";

// Definición del tipo de las props para incluir la función closeModal
interface RegisterProps {
  closeModal: () => void;
}

// Componente funcional Register
const Register: React.FC<RegisterProps> = ({ closeModal }) => {
  // Definición de estados para almacenar los valores del formulario
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Función para manejar el envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    // Prevenir el comportamiento por defecto del formulario
    e.preventDefault(); 
    // Enviar los datos del formulario al backend
    const response = await fetch("/api/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      // Convertir los datos del formulario a JSON
      body: JSON.stringify({ username, email, password }) 
    });
    // Cerrar el modal si la respuesta es exitosa
    if (response.ok) {
      closeModal(); 
    } else {
      // Manejar el error si la respuesta no es exitosa
    }
  };

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
        <form onSubmit={handleSubmit}>
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
              // Valor del estado username
              value={username} 
              // Actualizar el estado username
              onChange={(e) => setUsername(e.target.value)} 
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Correo Electrónico */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              // Valor del estado email
              value={email} 
              // Actualizar el estado email
              onChange={(e) => setEmail(e.target.value)} 
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
              // Valor del estado password
              value={password} 
              // Actualizar el estado password
              onChange={(e) => setPassword(e.target.value)} 
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Botón de envío */}
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
