import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import Collection from './pages/Collection';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// Rutas
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/gallery',
    element: <Gallery />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
  {
    path: '/collection',
    element: <Collection />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
