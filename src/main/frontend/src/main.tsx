import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
 
//Router
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
]);
 
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
