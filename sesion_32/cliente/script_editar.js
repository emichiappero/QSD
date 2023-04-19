$(document).ready(function () {
  let url_actual = window.location.href; // http://localhost:3000/tarea/123123123123/el_titulo_de_la_tarea

  //AJAX a la url actual
  // para que nos traiga información de la tarea
  $.ajax({
    url: url_actual,
    method: "post",
    success: function (respuesta) {
      console.log(respuesta);
      $("#nombre_tarea").val(respuesta.nombre); //En el input le asigno el valor de la respuesta (nombre)
      $("#detalle_tarea").text(respuesta.detalle); //En el textarea le asignamos el valor de la respuesta (detalle)
    },
  });

  //Evento enviar formulario para actualizar
  $("#formEditar").submit(function (e) {
    e.preventDefault();

    let datos = $("#formEditar").serialize();

    $.ajax({
      url: url_actual,
      method: "put",
      data: datos,
      success: function (respuesta) {
        alert(respuesta);
        //redirigir al usuario a la página de inicio ---> http://localhost:3000/
        window.location.href = "http://localhost:3000/";
      },
    });
  });
});
