function Saludo() {
  let nombre = "Mariana";
  let edad = 15;

  const estilo = { backgroundColor: "blue", padding: "15px" };

  const hola = (
    <h1 style={estilo}>
      Mi nombre es {nombre} y
      {edad >= 18 ? " soy mayor de edad" : " soy menor de edad"}
    </h1>
  );

  return hola;
}

export default Saludo;
