function Saludo(props) {
  const hola = (
    <span>
      <h1>{props.texto}</h1>
      <p>{props.parrafo}</p>
    </span>
  );

  return hola;
}

export default Saludo;
