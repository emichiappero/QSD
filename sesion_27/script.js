//Operador Ternario
// (condicion) ? si_es_true : si_es_false

var num = 10;

num > 10 ? alert("Es mayor a 10") : alert("Es menor o igual a 10");

alert(num > 10 ? "Es mayor" : "Es menor");

var texto = num > 10 ? "Es mayor" : "Es menor";
alert(texto);

//------------

//operador ternario SIN el else
num > 10 ? alert("Es mayor") : "";

// SOlicitar al usuario que ingrese una opción por prompt. Mediante operador ternario
// Si ingresa 1 -----> mostrar "Hola!"
// Si ingresa 2 -----> mostrar "Cómo estás?"
// Si ingresa 3 -----> mostrar "Chau"

var opc = parseInt(
  prompt(
    "Ingrese una de las siguientes opciionos \n \n 1. hoLA \n 2. Cómo estás \n 3.Chau"
  )
);

opc == 1 ? alert("Hola") : opc == 2 ? alert("Cómo estas") : alert("chau");
