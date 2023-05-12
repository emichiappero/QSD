import { useState, useEffect } from "react";
import Item from "./Items";

function Componente2() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((respuesta) => respuesta.json())
      .then((data) => setUsuarios(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {
        <ul>
          {usuarios.map((user, index) => {
            return <Item key={index} nombre={user.name} />;
          })}
        </ul>
      }
    </div>
  );
}

export default Componente2;
