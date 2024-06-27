import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.tsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
 
//Router
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
]);
 
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
