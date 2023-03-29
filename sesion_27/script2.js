// Alcance/scope/ámbito de una variable

// var tiene ambito Global o local/funcion

/* var nombre = "Emiliano";

function saludar(){
  var saludo = "hola como estas?";
  console.log(saludo);
}
 */
//------

/* var num = 10;

num = 20;

console.log(num) */

//Hoisting

/* console.log(texto);

var texto = "Hola mUndo"; */

//------------
/* 
var msj = "hola mundo";
var numero = 10;

if (numero > 9) {
  var msj = "hola mundo como estás?";
  console.log(msj);
}

console.log(msj); */

//Let y Const

// let ----> ámbito de bloque { }

/* let msj = "hola mundo";
let numero = 10;

if (numero > 9) {
  let msj2 = "hola mundo como estas?";
  console.log(msj2);
}
console.log(msj2); */

// let puede modificarse pero NO volver a declararse

console.log("---------- LET ----------");
let mensaje = "Hola mundo";
mensaje = "Como estas?";
console.log(mensaje);

console.log("--------");

let msj = "hola mundo";
let numero = 10;

if (numero > 9) {
  let msj = "Otra cosa";
  console.log("Dentro del if: " + msj);
}
console.log("Fuera del if: " + msj);

// const

// const ----> ámbito de bloque { }
// const NO puede modificarse NI volver a declararse

console.log("--------- CONST ---------");
const saludo = "Hola chic@s";
//const saludo = "Cómo están?";

console.log(saludo);

const auto = {
  marca: "Ford",
  modelo: "Fiesta",
};

auto.color = "rojo";

console.log(auto);

//------

const array = [1, 2, 3];

array[3] = 4;

console.log(array);

//--------

let nombre = "Emiliano";
nombre = "Laura";
console.log(nombre);

//----------

console.log("---- PROBANDO ----");

var total = 0;
for (let i = 0; i < 4; i++) {
  total = total + i;
}

console.log("total = " + total);
console.log(i);

const btnPagar = $("#btnPagar");

const boton = document.getElementById("miBoton");
