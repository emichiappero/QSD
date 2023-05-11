import "./App.css";

function App({ nombre, cargo, empresa, url }) {
  return (
    <div className="contenedor">
      <img src={url} />
      <p>
        <span>{nombre}</span>
        {cargo} de {empresa}
      </p>
      <p>
        El curso está realamente bueno, es una herramienta indispensable a la
        hora de programar.
      </p>
    </div>
  );
}

export default App;
