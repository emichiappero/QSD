import { useState, useEffect } from "react";

function Componente1() {
  const [dato, setDato] = useState("");
  const [num, setNum] = useState(0);

  const miFuncion = () => {
    setDato("Hola como están?" + num);
    setNum(num + 1);
  };

  useEffect(
    function () {
      console.log("Renderizando componente");
    },
    [dato]
  );

  /*
    useEffect( function(){
      //Esto se ejecuta cada vez que se renderiza el componente
    })

    useEffect( function(){
      //Esto se ejecuta en el primer renderizado
    }, [])

    useEffect( function(){
      //Esto se ejecuta en el primer renderizado
      //Y cada vez que "state" se actualice 
    }, [state])

  */

  return (
    <>
      <h2>{dato}</h2>
      <button onClick={miFuncion}>Clic</button>
    </>
  );
}

export default Componente1;
