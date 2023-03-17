var input = document.getElementById("tarea");
var boton_guardar = document.getElementById("btn");
var boton_mostrar = document.getElementById("btn_show");
var lista = document.getElementById("lista");

var array = JSON.parse(localStorage.getItem("datos")); //obtengo mi JSON string y lo convierto en un array
var task = array;

console.log(array);

boton_guardar.addEventListener("click", function () {
  task.push(input.value); //inserto un elemento en el último lugar del array "task"
  localStorage.setItem("datos", JSON.stringify(task)); //guardo en "datos" mi array, pero lo convierto a JSON String
});

boton_mostrar.addEventListener("click", function () {
  limpiar_lista();
  for (var i = 0; i < array.length; i++) {
    var li = document.createElement("li");
    var li_texto = document.createTextNode(array[i]);
    li.appendChild(li_texto);
    lista.appendChild(li);
  }
});

function limpiar_lista() {
  while (lista.firstChild) {
    lista.removeChild(lista.lastChild);
  }
}

//variables
var x = "hola";

// local storage
localStorage.setItem("edad", 30); // esto permite guardar el valor 30 en un almacenamiento local llamado edad

localStorage.getItem("edad"); //Obtener un dato almacenado en el local storage

localStorage.removeItem("edad"); //Elimina un dato almacenado en el local storage

/*

Solicitar al usuario que ingrese:
- NOmbre
- Apellido
- Dirección
- Telefono
- Serie favoria (utilizar un select)

Y cuando haga click en "guardar", que se guarde en local storage
Y cuando haga click en "recuperar", que se muestre en un h4: 
  - Nombre: ******
  - APellido: *****
  - Dirección: *****
  - Telefono: ******
  - Serie favorita: *******

*/
