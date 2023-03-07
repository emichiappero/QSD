/*

//For

for( inicializacion; condicion; actualizacion ){
  //todo lo que tenga
  //aquí adentro
}

//While

while( condicion ){
  //todo lo que yo quiera
  //otra instrucción
}


//Do While

do{
  //instruccion1
  //instruccion2
  //instruccion3
}while( condicion )

*/

//---------------

//slice
// string.slice(startIndex, endIndex)

var texto = "Hola este es un texto";
var palabra;

palabra = texto.slice(5); //devuelve la subcadena comenzando desde la posición 5
palabra = texto.slice(5, 9); //devuelve la subcadena comenzando desde la pos. 5 hasta la posicion 9
palabra = texto.slice(-5); //devuelve la subcadena comenzando desde el final, contando 5 posiciones

document.write(palabra);

//Según un texto ingresado por el usario, determinar cuántas letras a (mayúsculas o minúsculas) existen.
// for, while, .lenght, .toUpperCase(), .toLowerCase(), i

//Según un texto ingresado por el usuario, mostrar el texto pero de forma inversa.
//Ej: texto ingresado: hola mundo
//    texto a mostrar: odnum aloh

//Según un texto ingresado por el usuario, cambiar las:
// - a por 4
// - e por 3
// - i por 1
// - o por 0

inputUser = prompt("Ingresa una frase:").toLocaleLowerCase;
output = "";
var letra = "";

for (let index = 0; index <= inputUser.length; index++) {
  console.log(index);
  letra = inputUser.slice(1, 2);
  console.log(letra);
  switch (letra) {
    case "a":
      output += "4";
      break;
    case "e":
      output += "3";
      break;
    case "i":
      output += "1";
      break;
    case "o":
      output += "0";
      break;

    default:
      output += letra;
      break;
  }
}

console.log(output);
