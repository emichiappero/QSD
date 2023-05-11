import Boton from "./Boton";
import Resultado from "./Resultado";
import { useState } from "react";

function Convertidor() {
  const [conversion, setConversion] = useState(0);

  const [numero, setNumero] = useState(0);

  const convertirCopToArs = () => {
    console.log("1 COP = 0.05 ARS");
    setConversion(`${numero * 0.05} ARS`);
  };

  const convertirArsToCop = () => {
    console.log("1 ARS = 19.94 COP");
    setConversion(`${numero * 19.94} COP`);
  };

  const obtenerNumero = (elemento) => {
    setNumero(elemento.target.value);
  };

  return (
    <div>
      <Resultado mostrar={conversion} />
      <input type="number" onChange={obtenerNumero} />
      <br />
      <Boton texto="Convertir COP a ARS" convertir={convertirCopToArs} />
      <Boton texto="Convertir ARS a COP" convertir={convertirArsToCop} />
    </div>
  );
}

export default Convertidor;

//calcular la superficie de un rectangulo
//necesitamos que el usuario ingrese alto y ancho del rectángulo (alto * ancho)
