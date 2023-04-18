$(document).ready(function () {
  //Ejecuto la funcion apenas se carga el archivo
  peticion_servidor();

  function peticion_servidor() {
    $.ajax({
      url: "http://localhost:3000/prueba",
      method: "get",
      success: function (respuesta) {
        //console.log(respuesta);
        mostrar_lista(respuesta);
      },
    });
  }

  function mostrar_lista(resp) {
    $("#tareas").empty(); //vaciar la lista <ul>
    for (let i = 0; i < resp.length; i++) {
      console.log(resp[i]);
      $("#tareas").append(
        "<li>" +
          resp[i].nombre +
          " - <a href='/editar/" +
          resp[i]._id +
          "'> Editar " +
          "</a>" +
          "</li>"
      );
    }
  }

  /* ------------ */

  $("#miFormulario").submit(function (e) {
    e.preventDefault();
    let datos = $("#miFormulario").serialize();

    $.ajax({
      url: "http://localhost:3000/nuevaTarea",
      method: "post",
      data: datos,
      success: function (respuesta) {
        alert(respuesta);
        //location.href = "/"; //redirecciono al http://localhost:3000/
        peticion_servidor();
      },
    });
  });
});
