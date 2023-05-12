import { useState } from "react";
import Ejemplo from "./componentes/Ejemplo";

function App() {
  const [input, setInput] = useState("");
  return (
    <div className="container">
      <div className="row mt-5 p-2">
        <div className="col-3 border-right">
          <h3>Búsqueda</h3>
          <input
            type="text"
            className="form-control"
            placeholder="Buscar productos"
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div className="col-9">
          <Ejemplo busqueda={input} />
        </div>
      </div>
    </div>
  );
}

export default App;
