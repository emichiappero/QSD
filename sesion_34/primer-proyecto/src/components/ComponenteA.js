import B from "./ComponenteB";

function A(props) {
  let texto_enviado_de_A = props.txt;

  return (
    <li>
      <B mensaje={texto_enviado_de_A} />
    </li>
  );
}

export default A;
