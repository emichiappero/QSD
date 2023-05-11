import "./App.css";
import Boton from "./componentes/Boton";
import Contador from "./componentes/Contador";
import { useState } from "react"; //nos permite manejar los estados de los componentes

function App() {
  //Manejo el estado del componente
  const [cantClics, setCantClics] = useState(0);

  const eventoClic = () => {
    console.log("Clic en el botón Clic");
    setCantClics(cantClics + 1);
  };

  const reiniciarContador = () => {
    console.log("Click en el botón reiniciar");
    setCantClics(0);
  };

  //------
  const [texto, setTexto] = useState("Ingrese un texto");

  const cambiarTexto = (elemento) => {
    //console.log(elemento.target.value);
    setTexto(elemento.target.value);
  };

  return (
    <div className="App">
      <Contador numClics={cantClics} />
      <Boton texto="Clic" manejarClic={eventoClic} esBotonClic={true} />
      <Boton
        texto="Reiniciar"
        manejarClic={reiniciarContador}
        esBotonClic={false}
      />
      <hr />
      <input type="text" onChange={cambiarTexto} />
      <h1>{texto}</h1>
    </div>
  );
}

export default App;
