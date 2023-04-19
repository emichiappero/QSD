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
    if (resp.length == 0) {
      $("#tareas").append(
        "<p class='text-center font-monospace lead text-muted'><em>Por favor ingresa una tarea</em></p>"
      );
    } else {
      for (let i = 0; i < resp.length; i++) {
        console.log(resp[i]);

        // /tareas/123123/nombre de la tarea
        hipervinculo_editar =
          "<a href='/tarea/" +
          resp[i]._id +
          "/" +
          resp[i].nombre +
          "' class='btn badge bg-secondary rounded-pill me-1'> Editar </a>";

        // /eliminar/123445
        hipervinculo_eliminar =
          "<a href='/eliminar/" +
          resp[i]._id +
          "' class='btn badge bg-danger rounded-pill'>Eliminar</a>";

        $("#tareas").append(
          "<li class='list-group-item d-flex justify-content-between align-items-start mb-2'>" +
            "<div class='ms-2 me-auto font-monospace'>" +
            "<div class='fw-bold'>" +
            resp[i].nombre +
            "</div>" +
            "<small class='font-monospace fw-light'>" +
            resp[i].detalle +
            "</small>" +
            "</div>" +
            hipervinculo_editar +
            " " +
            hipervinculo_eliminar +
            " </li>"
        );
      }
    }
  }

  /* ------------ */

  $("#miFormulario").submit(function (e) {
    e.preventDefault();
    let datos = $("#miFormulario").serialize();
    $("#miFormulario")[0].reset();
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
