$(document).ready(function () {
  $("#miFormulario").submit(function (e) {
    e.preventDefault();

    //capturamos los elementos (input, select, textarea, etc) del formulario
    // y los "acomodamos" para enviarlos al servidor
    let datos_form = $("#miFormulario").serialize();

    //Petición por AJAX
    $.ajax({
      url: "http://localhost:3000/ejemplo_ajax",
      method: "POST",
      data: datos_form,
      success: function (respuesta) {
        //muestro en un alert la respuesta del servidor
        alert(respuesta);
      },
    });
  });
});
