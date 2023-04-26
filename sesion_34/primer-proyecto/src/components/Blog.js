function Blog() {
  const posteo = (
    <div>
      <h1>Hola Mundo, este es nuestro primer componente</h1>
      <p>Este es un parrafo</p>
    </div>
  );

  return posteo;
  //return SÓLO puede retornar 1 solo elemento html (adentro del mismo pueden ir varios)
}

export default Blog; //devolver o exportar el compomnente que creamos
