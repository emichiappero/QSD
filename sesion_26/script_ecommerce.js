$(document).ready(function () {
  function mostrar_seccion(seccion) {
    $(".secciones").hide(); //oculto todas las secciones
    $("#seccion_" + seccion).show(); //muestro sólo la sección correspondiente
  }

  //Menú
  $(".nav-link").click(function (e) {
    e.preventDefault(); //prevengo su comportamiento normal
    var menu = $(this).attr("id"); //obtengo el ID

    mostrar_seccion(menu); //función para mostrar u ocultar las secciones
  });

  //Botón comprar
  $(".comprar").click(function () {
    var prod = $(this).attr("id"); //obtengo el ID del botón comprar
    prod = prod.split("_").join(" "); //quito el guión bajo del ID

    $("#msj_producto").text(prod).css("font-weight", 700);
    $(".alert").show();

    alert($(this).data("producto"));
  });
});
