// Repaso de arrays

/*
[] = corchetes
() = parentesis
{} = llaves
*/

//var colores = ["rojo", "azul", "amarillo", "verde"];
/* var c = "hola mundo";

var miArray = [
  "hola",
  "chau",
  "a",
  c,
  9,
  103,
  1.4,
  ["rojo", "azul", "amarillo", [1, 2, 3, 4, 5, 6, 7, 8, 9, ["a", "b", "c"]]],
];

console.log(miArray.length); //cantidad de elementos del array
console.log(miArray);

console.log("----++++-----");

miArray[7][1] = "negro";

console.log(miArray[7][1]); //muestra "azul"
console.log(miArray[1]); // muestra "chau"

console.log("----++++-----");
console.log(miArray[7][3][9].length); */

//For y Arrays

//mostrar uno por uno, en un alert TODOS los elemenos del array "datos"
/* var datos = ["rojo", "verde", "azul", "negro", "rosa"];
for (var i = 0; i < datos.length; i++) {
  alert("i = " + i + "\n" + "datos[" + i + "] = " + datos[i]);
} */

/* ------ */

// eventListener ---> manejador de eventos

$(document).ready(function () {
  $(".miBoton").click(function () {
    var data = $(this).data("numero"); //obtengo el atributo data-numero del botón que se hizo un click
    var color = $(this).data("color"); //obtengo el atributo data-color del botón que se hizo un click
    console.log(
      "hiciste click en el botón " + data + " cuyo color es " + color
    );
  });

  //value es el contenido del input que ingresa el usuario

  // 1)hacer click en un boton
  $("#btn_pelicula").click(function () {
    // 2)capturar el valor del input
    // 3)meterlo en una variable
    var valor = $("#pelicula").val(); //document.getElementById("pelicula").value

    // 4)mostrar alert
    alert(valor);
  });

  var cont = 3;
  var cont2 = 1;
  $("#btn_lista_comienzo").click(function () {
    $("#lista").append("<li>Item " + cont + "</li>"); //inserta un li al final de la lista
    cont++;
  });

  $("#btn_lista_final").click(function () {
    cont2--;
    $("#lista").prepend("<li>Item " + cont2 + "</li>"); //inserta un li al comienzo de la lista
  });

  $("#btn_lista_despues").click(function () {
    $("#item_lista").after("<li>Item nuevo posterior</li>");
  });

  $("#btn_lista_antes").click(function () {
    $("#item_lista").before("<li>Item nuevo anterior</li>");
  });

  /* ------localStorage--------- */

  var input_fruta = [];
  var i = 0;
  $("#btn_frutas").click(function () {
    input_fruta[i] = $("#frutas").val(); //obtengo el dato ingresado por el usuario en el input "frutas"
    i++;
    //Agregar un nuevo almacenamiento localStorage
    localStorage.setItem("frutas_local", JSON.stringify(input_fruta));
  });

  $("#btn_mostrar").click(function () {
    //Obtengo el dato de localStorage
    var datos_locales = JSON.parse(localStorage.getItem("frutas_local"));
    console.log(datos_locales);
    for (var j = 0; j < datos_locales.length; j++) {
      console.log(datos_locales[j]);
    }
  });
});

//Hacer un algoritmo que el usario vaya agregando los distintos familiares que tiene, y se guarden
//en un localStorage, luego de que haga click en un botón.
//Si hace click en otro botón, se muestra en una lista, todos los elementos anteriores (familiares)
