import React from "react";
import ReactDOM from "react-dom/client";

//Importamos los componentes creados
import Menu from "./components/Menu";
import Formulario from "./components/Formulario";
import Saludo from "./components/Saludo";

//importamos el CSS de nuestro componente
import "./components/Menu.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Menu />
    <Formulario />
    <Saludo />
  </React.StrictMode>
);
