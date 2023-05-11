import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Convertidor from "./componentes/Convertidor";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <h2>Convertidor de Divisas</h2>
    <Convertidor />
  </React.StrictMode>
);
