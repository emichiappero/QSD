$(document).ready(function () {
  //Evento click del botón
  $("#btn_enviar").click(function () {
    //obtengo el valor que el usuario ingresó en el input
    let valor_input = $("#campo_nombre").val();

    //Envío al servidor una petición por AJAX
    $.ajax({
      url: "http://localhost:3000/ejemplo_ajax",
      method: "post",
      data: { nombre: valor_input },
      success: function (respuesta) {
        //en el parametro respuesta, tenemos la RESPUESTA del servidor
        alert(respuesta);
        $("#lista").append("<li>" + respuesta + "</li>");
      },
    });
  });

  //Evento del submit del formulario de registro
  $("#formulario1").submit(function (e) {
    e.preventDefault(); //impido que realice la acción predeterminada

    //capturar los datos ingresados en el formulario
    let datos = $("#formulario1").serialize(); //convierte en un json todos los datos ingresados

    //AJAX
    $.ajax({
      url: "/form_registro",
      method: "post",
      data: datos,
      success: function (resp) {
        //alert(resp);
        $("#mensajeRegistro").text(resp).show();
      },
    });
  });

  //Evento para enviar datos del formulario de Login
  $("#formulario2").submit(function (e) {
    e.preventDefault(); //impido que realice la acción predeterminada

    //capturar los datos ingresados en el formulario
    let datos = $("#formulario2").serialize(); //convierte en un json todos los datos ingresados

    //Petición de AJAX
    $.ajax({
      url: "form_login",
      method: "POST",
      data: datos,
      success: function (resp) {
        alert(resp);
      },
    });
  });
});
