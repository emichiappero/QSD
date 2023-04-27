import Columna from "./Columna";

function Fila(props) {
  return (
    <tr>
      <Columna dato={props.a} />
      <Columna dato={props.b} />
      <Columna dato={props.c} />
    </tr>
  );
}

export default Fila;
