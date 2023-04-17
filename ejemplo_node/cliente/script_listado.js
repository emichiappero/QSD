$(document).ready(function () {
  setTimeout(function () {
    //Esta petición por AJAX ocurre inmediatamente apenas se carga el HTML
    $.ajax({
      url: "http://localhost:3000/cargarContenidoTabla",
      method: "post",
      success: function (respuesta) {
        $("#miTabla").append(respuesta);
      },
    });
  }, 3000);
});
