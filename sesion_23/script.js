// Event Listener (manejador de eventos)
/*

elemento.addEventListener( "evento", function(){ 
  todo lo que querramos hacer
  va aquí adentro
  de la función
});

*/

var btn = document.getElementById("boton");
var sel = document.getElementById("sel");

//Crear un "manejador de eventos" para el botón
//El navegador, va a quedar escuchando constantemente cuando el usuario haga click en el botón
btn.addEventListener("click", function () {
  alert("Hola Mundo");
});

/* ************** EJEMPLO ******************* */

var txt = document.getElementById("texto");
var res = document.getElementById("resultado");
var res2 = document.getElementById("resultado2");
var res3 = document.getElementById("resultado3");
var res4 = document.getElementById("resultado4");
var res5 = document.getElementById("resultado5");

txt.addEventListener("keyup", function () {
  res.innerText = txt.value;
  res2.innerText = txt.value.toUpperCase();
  res3.innerText = txt.value.toLowerCase();
  res4.innerHTML = "<em>" + txt.value + "</em>";
  res5.innerText = inverso(txt.value);
});

function inverso(palabra) {
  var inv = "";
  for (var i = palabra.length - 1; i >= 0; i--) {
    inv += palabra[i];
  }
  console.log(inv);
  return inv;
}

/* ************** EJERCICIO ******************* */
// Solicitar al usuario que ingrese un número y decir por alert si el número es PAR o IMPAR.
// El número debe solicitarse por input
// Necesitamos: 1 input (number), 1 boton, 1 addEventListener

// En vez de mostrar el resultado en un alert, mostrarlo en un h3

/* ************** EJERCICIO ******************* */
/*
Crear una calculadora básica, utilizando:
- 2 inputs
- 4 botones
- 1 h4
- funciones con parametros y return
- eventos (addEventListener)
*/

/* *********************************************** */

var tabla = document.getElementById("tabla");
var btn = document.getElementById("add");
var miTabla = "";

btn.addEventListener("click", function () {
  //forma 1
  var fila = document.createElement("tr"); //crear una etiqueta "tr"
  var col = document.createElement("td");
  var dato = document.createTextNode("Este es un dato de prueba");

  col.appendChild(dato); //le agregamos un "hijo" a la columna
  fila.appendChild(col); //le agregamos un "hijo" a la fila

  tabla.appendChild(fila); //le agregamos a la tabla, una fila, que adentro tiene una columna con un dato

  //forma 2
  miTabla = miTabla + "<tr><td>Hola chicos como están</td></tr>";
  tabla.innerHTML = miTabla;
});

/*

EJERCICIO

Se le solicita al usuario que ingrse:
- Nombre, Apellido, Email y Telefono
- Fecha
- Productos (cantidad, nombre del producto y precio)

Cuando haga click en un botón "Generar factura": 
- mostrar todos los datos (ordenados), calculando el total a pagar


FACTURA

nombre apellido
email
telefono

fecha

CANT.  PRODUCTOS    PRECIO
1      Zapatilla    $100
3      Caramelos    $67

Total a pagar= $167

*/
