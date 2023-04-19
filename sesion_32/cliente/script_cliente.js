$(document).ready(function () {
  //Ejecuto la funcion apenas se carga el archivo
  solicitar_tareas();

  function solicitar_tareas() {
    $.ajax({
      url: "http://localhost:3000/prueba",
      method: "get",
      success: function (respuesta) {
        mostrar_lista(respuesta);
      },
    });
  }

  function mostrar_lista(resp) {
    let hipervinculo_editar;
    let hipervinculo_eliminar;
    $("#tareas").empty(); //vaciar la lista <ul>
    for (let i = 0; i < resp.length; i++) {
      console.log(resp[i]);

      // /tareas/123123/nombre de la tarea
      hipervinculo_editar =
        "<a href='/tarea/" +
        resp[i]._id +
        "/" +
        resp[i].nombre +
        "'> Editar </a>";

      // /eliminar/123445
      hipervinculo_eliminar =
        "<a href='/eliminar/" + resp[i]._id + "'>Eliminar</a>";

      $("#tareas").append(
        "<li>" +
          resp[i].nombre +
          "<br> [ " +
          hipervinculo_editar +
          " ] [ " +
          hipervinculo_eliminar +
          " ] </li><br>"
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
        solicitar_tareas();
      },
    });
  });
});
