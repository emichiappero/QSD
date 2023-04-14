//Paquetes
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");

//Configuración
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/js", express.static(path.resolve("../frontend/js")));

//Rutas
app.get("/", function (req, res) {
  res.sendFile(path.resolve("../frontend/index.html"));
});

app.post("/ejemplo_ajax", function (req, res) {
  let dato1 = req.body.nombre;
  let dato2 = req.body.color;
  let mensaje = "Hola " + dato1 + ", tu color es el " + dato2;

  //respuesta del servidor
  res.send(mensaje);
});

//Servidor
app.listen(3000, function () {
  console.log("Servidor funcionando!!!!!");
});
