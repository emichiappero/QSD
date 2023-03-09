/*
Ejercicio: El ahorcado

Debemos simular el famoso juego del ahorcado.
Según una palabra elegida por nosotros (programadores), le vamos a pedir al usuario que vaya ingresando 1 letra por vez.
- Si esa letra ingresada, está en la palabra original, se muestra un mensaje de que acertó
- Si la letra ingresada, NO está en la palabra original, se muestra un mensaje con la cantidad de fallas (tiene un máximo de 6 fallas)

Después de que ingresa cada letra, mostramos el estado general, o sea:
- Cantidad de letras de la palabra original
- Cantidad de aciertos
- Cantidad de errores

*/

/* 
var palabra = "javascript"; //va cualquier palabra que elijamos
var array_palabra = [];

for (var i = 0; i < palabra.length; i++) {
  array_palabra[i] = palabra.slice(i, i + 1);
}

var opcion = 1;
var aciertos = 0;
var errores = 0;
var mal = false;
var bien = false;
var fin = false;

while (opcion != 3 && fin != true) {
  opcion = parseInt(
    prompt(
      "Ingrese una opción: \n\n 1) Ingresar una letra \n 2) Adivinar palabra \n 3) Salir"
    )
  );

  switch (opcion) {
    case 1:
      var letra = prompt("Letra: ");
      var j = 0;

      mal = false;
      bien = false;
      for (var j = 0; j < array_palabra.length; j++) {
        if (letra == array_palabra[j]) {
          aciertos++;
          bien = true;
        }
      }

      if (bien != true) {
        errores++;
        if (errores == 5) {
          alert("Te queda un sólo intento");
        } else if (errores == 6) {
          alert("AHORCADO!!!");
          fin = true;
        }
      }

      if (fin != true) {
        var mensaje = "- Cantidad de letras totales: " + palabra.length;
        mensaje += "\n - Cantidad de aciertos: " + aciertos;
        mensaje += "\n - Cantidad de errores: " + errores;
        mensaje += "\n - Intentos restantes: " + (6 - errores);
        alert(mensaje);
      }
      break;

    case 2:
      var adivinar = prompt("Ingrese la palabra");
      if (palabra == adivinar) {
        alert(
          "¡Felicitaciones! Haz adivinado la palabra \n\n Palabra original:" +
            palabra
        );
      } else {
        alert(
          "¡Ups! Lamentablemente esa no era la palabra original. \n\n Palabra original: " +
            palabra
        );
      }
      fin = true;
      break;

    case 3:
      alert("Hasta luego!");
      break;

    default:
      alert("Por favor ingresa una opción válida");
      break;
  }
}
 */

//FUNCIONES

//declaración/creación de la función suma
function suma(num1, num2) {
  var total = num1 + num2;
  alert(total);
  console.log("Dentro de la function " + num1);
}

//ejecutar/instanciar/llamar la función suma

suma(10, 99);

var num1 = parseInt(prompt("Ingrese el primer numero")); // 8
var num2 = parseInt(prompt("Ingrese el segundo número")); // 10

suma(num2, num2);

//crear un for, repetir 3 veces 2 prompt, donde le pidamos al usuario 2 numeros
//llamar a una función y sumar los valores

function miFuncion(param1, param2, param3) {
  console.log(param1);
  console.log(param2);
  console.log(param1 + param2 + param3);
}

var a = 10; //prompt
var b = 20; //prompt
var c = a + b; //prompt

miFuncion(a, b, c);

//Hacer una calculadora, utilizando un menú, funciones con parametros según la opción.
