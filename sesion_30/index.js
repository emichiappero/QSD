//Paquetes o módulos
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

var datos_nombres = [];
var datos_emails = [];
var datos_pass = [];

//Configuraciones

//Configuracion para manejar ordenadamente los datos que provienen del cliente con una peticion POST
app.use(bodyParser.urlencoded({ extended: true }));

//Configuracion para manejar archivos estáticos (css, imagenes, js, fuentes, etc)
app.use("/css", express.static("css"));
app.use("/js", express.static("js"));

//Rutas
//Inicio (index.html)
app.get("/inicio", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

//Registrarse (registro.html)
app.get("/registrarse", function (req, res) {
  res.sendFile(__dirname + "/registro.html");
});

//Formulario de registro
app.post("/form_registro", function (req, res) {
  /* let nombre = req.body.nombre;
  let email = req.body.email;
  let password = req.body.password; */

  //Destructuring
  let { nombre, email, password } = req.body;

  datos_nombres.push(nombre);
  datos_emails.push(email);
  datos_pass.push(password);

  console.log("---------------------------");
  console.log(datos_nombres);
  console.log(datos_emails);
  console.log(datos_pass);
  console.log("---------------------------");

  res.sendFile(__dirname + "/registro.html");
});

//Login (login.html)
app.get("/login", function (req, res) {
  res.sendFile(__dirname + "/login.html");
});

//Formulario del Login
app.post("/form_login", function (req, res) {
  let { email, password } = req.body;
  let existe_usuario = false;
  let i = 0;
  let mensaje = "Email o contraseña incorrecta";

  //recorrer los 3 arrays y chequear si los datos email y password existen y son iguales
  while (existe_usuario == false && i < datos_emails.length) {
    if (datos_emails[i] == email && datos_pass[i] == password) {
      existe_usuario = true;
      mensaje = "Bienvenido " + datos_nombres[i];
    }
    i++;
  }

  console.log("---------------------------");
  console.log("Email: " + email);
  console.log("Password: " + password);
  console.log(mensaje);
  console.log("---------------------------");

  //res.send(mensaje);
  res.sendFile(
    existe_usuario == true
      ? __dirname + "/status_ok.html"
      : __dirname + "/status_error.html"
  );
});

//Puerto
app.listen(3000, function () {
  console.log("Servidor funcionando correctamente");
});
