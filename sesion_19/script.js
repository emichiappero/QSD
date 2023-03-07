//Factorial
// factorial de 5 (5!) = 5 * 4 * 3 * 2 * 1 = 120
// 5! =  1 * 2 * 3 * 4 * 5 = 120

var num = parseInt(prompt("Ingrese un número"));

var factorial = 1;
for (var i = 1; i <= num; i++) {
  factorial = factorial * i;
}

for (var i = num; i > 0; i--) {
  factorial = factorial * i; // acumulandor
}

//alert(factorial);

//Secuencia de Fibonacci

// 0 1 1 2 3 5 8 ............

var fibo = "0 1";

var primero = 0;
var segundo = 1;
var tercero = 0;

for (var i = 1; i <= num; i++) {
  tercero = primero + segundo;

  fibo = fibo + " " + tercero;

  primero = segundo;
  segundo = tercero;
}

console.log(fibo);

//Ejercicio 3

var asteriscos = "";

//for nº 1 (maneja los niveles/renglones/líneas)
for (var i = 1; i <= num; i++) {
  //for nº 2 (maneja los asteriscos)
  for (var j = 1; j <= i; j++) {
    asteriscos = asteriscos + "*";
  }
  console.log(asteriscos);
  asteriscos = "";
}

for (var i = num - 1; i > 0; i--) {
  for (var j = i; j > 0; j--) {
    asteriscos = asteriscos + "*";
  }
  console.log(asteriscos);
  asteriscos = "";
}
