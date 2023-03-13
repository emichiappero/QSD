/* function suma(a, b) {
  var total = 10 + 1;
 //buscar un dato a una base de datos, filtrarlo y devolverlo
  return total;
}

var a = 10;
var b = 25;

var resp = suma(a, b);
alert(resp); */

/* function saludo(nombre) {
  var msj = "Hola " + nombre + ", ¿cómo estás?";
  return msj;
}

var hola;
hola = saludo("Emiliano");

alert(saludo("Juan"));

console.log(saludo("Alejandra"));

console.log(hola);
 */

//SUPER Calculadora

var op = parseInt(
  prompt(
    "Ingrese una opción: \n\n 1) SUMA \n 2) RESTA \n 3) MULTIPLICACIÓN \n 4) DIVISIÓN \n 5) SALIR"
  )
);

switch (op) {
  case 1:
    //suma
    mostrar_alert(operacion_matematica("suma"));
    break;

  case 2:
    //resta
    var x = operacion_matematica("resta");
    mostrar_consola(x);
    break;

  case 3:
    //multiplicación
    mostrar_consola(operacion_matematica("multiplicacion"));
    break;

  case 4:
    //división
    mostrar_alert(operacion_matematica("division"));
    break;

  case 5:
    //salir
    break;

  default:
    alert("Ingrese una opción correcta");
    break;
}

function operacion_matematica(accion) {
  var a = parseFloat(prompt("Ingrese el primer número"));
  var b = parseFloat(prompt("Ingrese el segundo número"));
  var total = 0;

  switch (accion) {
    case "suma":
      total = a + b;
      break;

    case "resta":
      total = a - b;
      break;

    case "multiplicacion":
      total = a * b;
      break;

    case "division":
      if (b != 0) {
        total = a / b;
      } else {
        alert("No se puede dividir por 0.");
      }
      break;
  }

  //return total; //devuelve la operación matematica realizada
}

function mostrar_alert(param) {
  alert("El restultado es: " + param);
}

function mostrar_consola(param) {
  console.log("El resultado es: " + param);
}

/*
Según un texto ingresado por el usuario, van a crear 3 funciones:

- mayusculas (que reciba un parametro y devuelva eso mismo en mayúsculas)
- minusculas (que reciba un paramentro y devuelva eso mismo en minúsculas)
- mostrar (que reciba un parametro y muestre por consola eso mismo)

Darle a elegir al usuario, como desea transformar el texto (a may o min) y luego se muestra

 */

/*
  Crear una función que determine si la cadena de texto que se le pasa como parámetro es un palíndromo,
  es decir, si se lee de la misma forma desde la izquierda y desde la derecha. 
  
  Ejemplo: 
  - Anana 
  - La ruta nos aporto otro paso natural

  array = ["l", "a", "r", "u", "t", "a"]
  array2= ["a", "t", "u", "r", "a", "l"]


  - pasar texto a array, letra por letra
  - mientras hago ese punto anterior, NO pasar los espacios en blanco
  - en un for inverso (decrementando), copiar el array y crear otro que empiece desde la ultima letra
  - convierto array inverso en texto, y lo comparo con el texto ooriginal (sin espacios) y tiene que dar iguales

  */
