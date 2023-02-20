// Entry point for the build script in your package.json
import React from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from "./react/src/components/App";
import { createRoot } from 'react-dom/client';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  }
])

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);