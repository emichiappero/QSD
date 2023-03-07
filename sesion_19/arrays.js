var dia1 = "Lun";
var dia2 = "Mar";
var dia3 = "Mie";
var dia4 = "Jue";
var dia5 = "Vie";
var dia6 = "Sab";
var dia7 = "Dom";

var i = "alo";

var array2 = [2, 4, 6];

var dias = [
  "Lun",
  "Mar",
  "Mie",
  "Jue",
  "Vie",
  "Sab",
  "Dom",
  34,
  true,
  i,
  array2,
];

console.log(dias[8]); // true
console.log(dias[3]); // Jue
dias[2]; // Mie

console.log("Logitud " + dias.length);

dias[12] = "Emiliano"; //asignación de valor en la posición 12 de mi array dias

//Ejercicio
/*
  según un número ingresado por el usuario, ir solicitando valores (texto o número) y guardarlo en un array
  Ej: el usuario ingresa 4.
  Me pide 4 veces distintas que ingrese un valor (texto o numero) y a esos 4 datos los guardo en un array
*/

/* var dato = parseInt(prompt("Ingrese un numero"));
var array = [];

for (var i = 0; i < dato; i++) {
  array[i] = prompt("Ingrese un dato");
}

for (var j = 0; j < array.length; j++) {
  alert("La posición " + j + " del array, contiene: " + array[j]);
} */

//Ejercicio
/* Según 5 numeros ingresados por el usario (en un FOR), ordenarlos de menor a mayor  */

/*
Crear un programa que permite ingresar distintos valores, y luego preguntar qué valor se desea averiguar si existe. 
El programa debe devolver un mensaje diciendo si dicho valor se encuentra dentro de los valores originales o no. 
Ej: se ingresa los valores: 5 7 99 34 54 2 12
    valor a buscar: 54
    RESULTADO: El valor 54 se encuentra entre los valores originales
*/

/* var opcion = parseInt(
  prompt("Ingrese una opción: \n\n 1) Agregar datos \n 2) Salir")
);

var dato;
var numeros = [];
var existe = false;
var repetir_busqueda = 1;

switch (opcion) {
  case 1:
    //Agregar datos
    var cant = parseInt(prompt("¿Cuántos datos desea ingresar?"));

    for (var i = 0; i < cant; i++) {
      dato = parseInt(prompt("Ingrese el #" + (i + 1) + " número"));
      numeros[i] = dato;
    }

    console.log(numeros);

    while (repetir_busqueda == 1) {
      //Buscar un dato
      var buscar = parseInt(prompt("Ingrese el valor a buscar"));

      for (var i = 0; i < numeros.length; i++) {
        if (buscar == numeros[i]) {
          existe = true;
        }
      }

      if (existe == true) {
        alert(
          "El número " + buscar + " existe en el conjunto de datos originales"
        );
      } else {
        alert(
          "El número " +
            buscar +
            " NO existe en el conjunto de datos originales"
        );
      }

      repetir_busqueda = parseInt(
        prompt("¿Desea buscar otro número? \n\n 1) SI \n 2) NO")
      );
    }

    break;

  case 2:
    //Salir
    alert(
      "Muchas gracias por comunicarse con  nosotros! \n Que tengas un hermoso día "
    );
    break;

  default:
    //Otro valor
    alert("Ingrese una opción válida!");
    break;
} */

/*
Crear un programa que pida ingresar las siguientes frutas: Manzana, Naranja o Pera.
Y devuelva un mensaje con la cantidad que hay de cada fruta.
Aclaración: puede utilizar un menú, y cuando selecciones "Salir", finaliza el programa
*/

var opcion = parseInt(
  prompt(
    "Bienvenid@, ingrese una opción: \n\n 1) Ingresar una fruta \n 2) Salir"
  )
);

switch (opcion) {
  case 1:
    //Ingresar una fruta y mostrar sus cantidades
    var fruta = prompt(
      "Por favor ingrese alguna de estas 3 frutas: manzana, naranja o pera"
    ).toLowerCase();
    var array_frutas = [];
    var i = 0;
    var cant_manzana = 0;
    var cant_naranja = 0;
    var cant_pera = 0;

    while (fruta == "manzana" || fruta == "naranja" || fruta == "pera") {
      array_frutas[i] = fruta;
      i++;
      fruta = prompt(
        "Por favor ingrese alguna de estas 3 frutas: manzana, naranja o pera"
      ).toLowerCase();
    }

    for (var j = 0; j < array_frutas.length; j++) {
      if (array_frutas[j] == "manzana") {
        cant_manzana++;
      } else if (array_frutas[j] == "naranja") {
        cant_naranja++;
      } else {
        cant_pera++;
      }
    }

    alert(
      "Se ingresaron: \n \n " +
        cant_manzana +
        " Manzanas \n " +
        cant_naranja +
        " Naranjas \n " +
        cant_pera +
        " Peras"
    );

    break;

  case 2:
    //Salir
    alert("Graciasssss....vuelva prontossss!");
    break;
}
