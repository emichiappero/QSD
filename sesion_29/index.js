//Servidor creado con NODE (puro)
/* const http = require("http");
const fs = require("fs");

//creamos un servidor HTTP que maneje las "peticiones" (request) del cliente,
//y le devuelva una "respuesta" (response)
http
  .createServer(function (req, res) {
    console.log("Gracias, se comunicó con el SERVIDOR");

    //Creando la CABECERA/HEAD de la respuesta
    res.writeHead(200, {
      "Content-Type": "text/html",
      "Access-Control-Allow-Origin": "*",
    });

    //acceder al archivo que quiero enviarle al cliente
    let leerArchivo = fs.createReadStream(__dirname + "/index.html");

    leerArchivo.pipe(res);
  })
  .listen(3000, function () {
    //localhost:3000
    console.log("Servidor LISTO, y escuchando el puerto 3000 (localhost:3000)");
  });
 */

//Servidor creado con EXPRESS
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//Configurar el bodyParser para utilizarlo
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/css", express.static("css"));

//creamos la URL + Metodo = Request o Peticion del cliente

//cuando el CLIENTE ingrese por GET a la URL = http://localhost:3000/home
app.get("/home", function (req, res) {
  console.log("El CLIENTE ingreso por GET a http://localhost:3000/home");

  //respuesta del servidor
  res.sendFile(__dirname + "/index.html");
});

//Ruta para GET /registro
app.get("/registro", function (req, res) {
  res.sendFile(__dirname + "/registro.html");
});

// Ruta para GET /login
app.get("/login", function (req, res) {
  res.sendFile(__dirname + "/login.html");
});

//Ruta para manejar la peticion POST /formulario
app.post("/formulario_login", function (req, res) {
  console.log(req.body);
  console.log("email: " + req.body.dato1);
  console.log("contraseña: " + req.body.dato2);
});

app.listen(3000, function () {
  console.log("Servidor listo y preparado en el puerto 3000");
});
