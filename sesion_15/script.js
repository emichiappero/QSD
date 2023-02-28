// var edad;
// var ingreso = prompt("ingrese su edad");
// edad = parseInt( ingreso );
/*
var edad = parseInt(prompt("Ingrse su edad"));

if (edad < 18) {
  alert("Aún eres menor de edad");
} else {
  alert("Eres mayor de edad");
}
*/

//--------------

var mes = prompt("Ingrese un mes");

/*
if (mes == 2) {
  alert("El mes tiene 28 días");
} else {
  if (mes == "febrero") {
    alert("El mes tiene 28 días");
  } else {
    if (mes == "feb") {
      alert("El mes tiene 28 días");
    } else {
      alert("El mes tiene más de 28 días");
    }
  }
}*/

if (mes == 2) {
  alert("El mes tiene 28 días");
} else if (mes == "febrero") {
  alert("El mes tiene 28 días");
} else if (mes == "feb") {
  alert("El mes tiene 28 días");
} else {
  alert("El mes tiene más de 28 días");
}

if (mes == 2 || mes == "febrero" || mes == "feb") {
  alert("El mes tiene 28 días");
} else {
  alert("El mes tiene más de 28 días");
}

//EJERCICIO 1
// Solicitar al usuario 2 números, y mostrar un mensaje que indique
// si el 1º es divisible por el 2º numero, o no lo es.

//EJERCICIO 2
// Solicitar al usuario que ingrese un color, según este, mostrar un mensaje
// que diga si el mismo es un color primario o no

//EJERCICIO 3
//Crear un programa que determine si un número introducido
// es divisible por 11 y 5

//EJERCICIO 4
// Crear un programa que determine si el número ingresado es PAR o NO

//EJERCICIO 5
//
