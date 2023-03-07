/*
Ciclos/estructuras de repetición

FOR

for ( inicializacion; condicion; actualizacion ){
  ...
  ...
  ...
}

*/

// for (var i = 0; i < 5; i++) {
//   alert("Hola " + i);
// }

//Ejercicio
/*

Solicitar al usuario que ingrese número positivo, y mostrar en un alert,
cuántos números hay que son pares.
Ej: El usuario ingresa 10.
"Hay 5 números que son pares"

*/

/*
  Según un número ingresado por el usuario, mostrar en por console.log lo siguiente:
  Ej: el usuario ingresa el 4

    4x1 = 4
    4x2 = 8
    4x3 = 12
    4x4 = 16
    ...
    4x10 = 40

*/

/*

Ejercicio 3
Mostrar con document.write en un h2,  los números del 10 al 0 y finalmente un mensaje que diga "Despegue!!"
10
9
8
7
....


Despegue!
*/

//Ejemplo

var cant = parseInt(prompt("Ingrese un número"));
var x = " * ";
var y;
for (var i = 1; i <= cant; i++) {
  y = "";
  for (var j = 1; j <= i; j++) {
    y = y + x;
  }
  document.write("<h4>" + y + "</h4>");
}

for (var i = cant - 1; i >= 1; i--) {
  y = "";
  for (var j = i; j >= 1; j--) {
    y = y + x;
  }
  document.write("<h4>" + y + "</h4>");
}
