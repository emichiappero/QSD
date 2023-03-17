//utilice sentencias e insgtrucciones de JQuery

$(document).ready(function () {
  //Todo lo que pongamos aquí, se ejecuta SOLO cuando el document este ready o listo

  //SELECTOR ID
  document.getElementById("dato"); //JS
  $("#dato"); //JQuery

  //SELECTOR CLASS
  document.getElementsByClassName("btn"); //JS
  $(".btn"); //JQuery

  //Value
  document.getElementById("dato").value; //JS
  $("#dato").val();

  $("#dato").val("hola chicos como están?"); //JQuery

  //Evento
  //var //boton = document.getElementsByClassName("btn");
  //boton.//addEventListener(function(){});

  $(".btn").click(function () {
    alert("Hola chicos");
  });

  /* Calculadora */
  $("#btn_suma").click(function () {
    var n1 = $("#num1").val();
    var n2 = $("#num2").val();
    var total = parseInt(n1) + parseInt(n2);

    $("#resultado")
      .text("El resultado de la suma es " + total)
      .css("color", "red");
  });
});
