$(document).ready(function () {
  //Escribo todo lo necesario para enviar los datos al servidor
  $("#miFormulario").submit(function (e) {
    e.preventDefault();

    let datos_formulario = $("#miFormulario").serialize();

    //Petición al servidor hecha con AJAX
    $.ajax({
      url: "http://localhost:3000/guardarNumero",
      method: "post",
      data: datos_formulario,
      success: function (respuesta_del_servidor) {
        alert(respuesta_del_servidor);
      },
    });
  });
});
