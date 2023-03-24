/* var x = 10;

localStorage.setItem("x", 10);

console.log("Variable: " + x);
console.log("localStorage: " + localStorage.getItem("x"));

//Averiguar el tipo de dato

console.log("Tipo de dato de Variable: " + typeof x);
console.log(
  "Tipo de dato de localStorage: " + typeof localStorage.getItem("x")
);

//convertir el string a number
var entero = parseInt(localStorage.getItem("x"));

console.log(typeof entero);
 */

/*

JSON (Javascript Object Notation)

{
  nombre: Emiliano,
  apellido: Chiappero,
  edad: 38,
  color: black,
  margin: 16px
}

[
  0: Emiliano,
  1: Laura,
  2: Juana,
  3: Martín
]

*/

/* var datos = [1, 2, 3, 4];
console.log(typeof datos); //objeto

localStorage.setItem("datos_ejemplo", JSON.stringify(datos)); //convierte algo a un string de JSON

console.log(typeof localStorage.getItem("datos_ejemplo")); //quiero conocer el tipo de dato que es "datos_ejemplo"

var convertido = JSON.parse(localStorage.getItem("datos_ejemplo")); //convierte un string (con forma de JSON ) en array
console.log(typeof convertido);
 */

var dato = prompt("Ingrese un dato");
var array = [];
var i = 0;

while (dato != "salir") {
  array[i] = dato;
  i++;
  dato = prompt("Ingrese un dato");
}

console.log(array);

// Recorrer ese array
console.log("------- Recorriendo el array ---------");
for (var j = 0; j < array.length; j++) {
  console.log("array[" + j + "] = " + array[j]);
}

//Guardarlo en un localStorage
localStorage.setItem("array_local", JSON.stringify(array)); // JSON.stringify ---> convierte un array en String JSON
var local = JSON.parse(localStorage.getItem("array_local")); // JSON.parse -------> convierte el String JSON en un array

//Recorrer el localStorage
console.log("------- Recorriendo el array desde el localStorage ---------");
for (var j = 0; j < local.length; j++) {
  console.log(local[j]);
}
