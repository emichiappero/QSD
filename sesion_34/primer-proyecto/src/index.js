import React from "react";
import ReactDOM from "react-dom/client";

//Importamos los componentes creados
import Tabla from "./components/Tabla";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Tabla />
  </React.StrictMode>
);
