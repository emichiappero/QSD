import "../estilos/Boton.css";

function Boton({ texto, manejarClic, esBotonClic }) {
  return (
    <button
      className={esBotonClic == true ? "boton-clic" : "boton-reiniciar"}
      onClick={manejarClic}
    >
      {texto}
    </button>
  );
}

export default Boton;
