// SI
// var numero;
// var num1;
// var total_empleados;
// var listadoClientes; //Notación camello o CamelCase Notation
// var listadoClientesDeudores2023;
// var listado_clientes_deudores_2023;

// NO
/*
var numero 1; //espacios en blanco NO
var 1numero; //no comenzar con números o signos
var .numero; //idem anterior
var NUMERO; //No mayusculas
var acción; //No acentos
var piña; //No caracteres especiales (raros)
var pingüino; //idem anterior
var nombre%; //idem anterior
var edad¿; //idem anterior
var "nombre"; //idem anterior
*/

//Números o int (integer)
var iva = 10;
var total = 1000000;

var algo = iva + total;

//Cadenas de texto o String
var mensaje = "Bienvenidos a mi curso de programación";
var nombreProducto = 'Smart TV 55" ';
var producto = "Manzana 'Deliciosa'";

//Boolean
var estado = true;
var vendido = false;

//Funciones especiales para cadenas de texto

//Length
var texto = "Emiliano Chiappero";
var cantidad = texto.length;

//alert(cantidad);

//Concatenar (unir texto)
var nombre = "Emiliano";
var apellido = "Chiappero";
var nombre_completo = nombre + " " + apellido + " ese soy YO";
//alert(nombre_completo);

//Mayusculas
var mascota = "perro";
//alert(mascota.toUpperCase());

var color = "VERDE";
//alert(color.toLowerCase());

//Prompt
//var nombre_usuario = prompt("Hola, ingrese su nombre por favor");

//alert(nombre_usuario.toUpperCase());

//Operaciones Matemáticas
/*

+ (suma)
- (resta)
* (multiplicación)
/ (división)

*/

//ParseInt --> convierte un STRING a NUMERO ENTERO
var num = prompt("Ingrese un numero"); // "3"

var resta = 10 - parseInt(num); // 7

alert(resta);

//Pedir al usuario que ingrese 2 números (por separado), y mostrar
// la suma, resta, multiplicación y división de ambos números
