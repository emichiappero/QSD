//DOM = Document Object Model
//ACCESO A NODOS

/* ----------- TAG NAME ------------ */
console.log("-------");
console.log("Mostrando elementos por propiedad ETIQUETA ");

//mediante el Nombre de etiqueta ---> document.getElementsByTagName("x")
var parrafos = document.getElementsByTagName("p");

for (var i = 0; i < parrafos.length; i++) {
  console.log(parrafos[i].innerText); //obtento el texto interior de cada párrafo
}
console.log("-------");
for (var i = 0; i < parrafos.length; i++) {
  console.log(parrafos[i].innerHTML); //obtengo el HTML interior de cada parrafo
}

/* ------------ NAME ----------- */
console.log("-------");
console.log("Mostrando elementos por propiedad NAME ");

//mediante la propiedad Name ---> document.getElementsByName( "x" )
var a = document.getElementsByName("parrafo1");
for (var i = 0; i < a.length; i++) {
  console.log(a[i].innerText);
}

/* ------------- ID ---------- */
console.log("-------");
console.log("Mostrando elemento por ID ");
//mediante el ID ---> document.getElementByID("x")
var b = document.getElementById("boton");
console.log(b.innerText);

/* ------------- CLASS ---------- */

console.log("-------");
console.log("Mostrando elemento por CLASS ");
//mediante la Clase ---> document.getElementsByClassName("x")
var c = document.getElementsByClassName("saludo");

for (var i = 0; i < c.length; i++) {
  console.log(c[i].innerText);
}

var enlace = document.getElementById("link");
console.log(enlace.href);
console.log(enlace.style.color);
console.log(enlace.className);

console.log(enlace.getAttribute("style"));

//Ejercicio

/* 
Crear una etiqueta (cualquiera), colocarle un ID, en base a ese ID, desde Javascript agregarle los siguientes atributos:

  - class = miClase
  - color de ltra = verde
  - texto interno = Hola, estamos hackeando la matrix!
*/

var miParrafo = document.getElementById("miParrafo");
miParrafo.className = "miClase";
miParrafo.style.color = "green";
miParrafo.innerText = "Hola, estamos hackeando la matrix!";

/*
Cuando el usuario haga click en un botón "Mostrar", 
deberá mostrar en un console log los datos que 
ingresó en los input: nombre, apellido y edad
*/

function caputar_datos() {
  var nom = document.getElementById("nombre");
  var ape = document.getElementById("apellido");
  var edad = document.getElementById("edad");

  console.log(
    "Nombre: " +
      nom.value +
      " - Apellido: " +
      ape.value +
      " - Edad: " +
      edad.value
  );
}
