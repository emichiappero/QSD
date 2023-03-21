$(document).ready(function () {
  //Aquí va mi código

  //document.getElementById("link")
  //addEventListener()

  $("#seccion2").hide();

  $("#menu1").click(function (e) {
    e.preventDefault();
    $("#seccion1").show(); //Muestro un elemento
    $("#seccion2").hide(); //Oculto un elemento
  });

  $("#menu2").click(function (e) {
    e.preventDefault();
    $("#seccion2").show(); //Muestro un elemento
    $("#seccion1").hide(); //Oculto un elemento
  });

  $("#link").click(function (e) {
    e.preventDefault(); // Previene el comportamiento por defecto del elemento "a"

    //$("#texto").text("Hola que tal?");

    //$("#texto").css("background-color", "blue");

    //$("#texto").fadeOut(1500);

    //Chaining o encadenamiento
    $("#texto").text("Hola mundo").css("color", "red").fadeOut(1500);
  });
});
