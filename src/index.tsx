import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Contact from './pages/Contact';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/contact',
    element: <Contact />
  }
]);


createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
      <App />
  </React.StrictMode>
)
