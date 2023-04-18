$(document).ready(function () {
  $.ajax({
    url: "http://localhost:3000/prueba",
    method: "get",
    success: function (respuesta) {
      console.log(respuesta);
    },
  });
});
