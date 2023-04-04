$(document).ready(function () {
  var array_prod = [];
  var array_cant = [];
  var array_precio = [];

  //var i = 0;

  $(".prod").click(function () {
    var nombre_prod = $(this).data("nombre");
    var precio_prod = $(this).data("precio");
    var cant_prod = $(this).data("cantidad");

    /*  array_prod[i] = nombre_prod;
    array_cant[i] = cant_prod;
    array_precio[i] = precio_prod;

    i++; */

    array_prod.push(nombre_prod);
    array_precio.push(precio_prod);
    array_cant.push(cant_prod);

    console.log(array_prod);
    console.log(array_cant);
    console.log(array_precio);
  });
});
