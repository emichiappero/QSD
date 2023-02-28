//Switch
/*
var x = 10;

switch (x) {
  case 10:
    alert("El valor es 10");
    break;

  case 9:
    alert("El valor es 9");
    break;

  case 7:
    alert("El valor es 7");
    break;

  default:
    alert("El valor es otro numero");
}*/

/*
var mes = prompt("Ingrese una opción: \n 1 - Suma \n 2 - Resta");

switch (mes) {
  case 2:
    alert("El mes tiene 28 días");
    break;

  case "feb":
    alert("El mes tiene 28 días");
    break;

  case "febrero":
    alert("El mes tiene 28 días");
    break;

  default:
    alert("El mes tiene más de 28 días");
}
*/

/*
Tomar el codigo de la calculadora, y hacer un "menú" donde si el usuario ingresa:
 - Opción 1 ---> Suma
 - Opción 2 ---> Resta
 - Opción 3 ---> Multiplicación
 - Opción 4 ---> División
 - Otro ---> Mensaje de error

*/

var menu = parseInt(
  prompt(
    "Ingrese una opción: \n\n 1)Suma \n 2)Resta \n 3) Multiplicación \n 4) División"
  )
);

if (menu >= 1 && menu <= 4) {
  var num1 = parseFloat(prompt("Ingrese el primer número"));
  var num2 = parseFloat(prompt("Ingrese el segundo número"));
}
var total;
var operacion;

switch (menu) {
  case 1:
    //Suma
    total = num1 + num2;
    operacion = "suma";
    break;

  case 2:
    //Resta
    total = num1 - num2;
    operacion = "resta";
    break;

  case 3:
    //Multiplicación
    total = num1 * num2;
    operacion = "multiplicación";
    break;

  case 4:
    //Divisón
    if (num2 != 0) {
      total = num1 / num2;
      operacion = "división";
    } else {
      alert("No se puede dividir por cero");
    }

    break;

  default:
    alert("No ingresó una opción válida");
}

if (menu >= 1 && menu <= 4) {
  alert("El resultado de la " + operacion + " es igual a " + total);
}
