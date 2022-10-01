import React from "react";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Home from './pages/home/Home';
import Ini from './pages/ini/ini';
import Dashboard from './pages/dashboard/dashboard';
import Formulario from "./pages/formulario/formulario";
import Page404 from "./pages/Page404";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Home />
    ),
  },
  {
    path: "Formulario",
    element: 
      <Formulario />
  },
  {
    path: "Login",
    element: 
      <Ini />
  },
  {
    path: "Dashboard",
    element: 
      <Dashboard />
  },
  {
    path: "*",
    element: 
      <Page404 />
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
