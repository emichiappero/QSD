const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");

//Configuraciones
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve("../cliente/")));

//Rutas

// GET localhost:3000/inicio
app.get("/inicio", function (req, res) {
  res.sendFile(path.resolve("../cliente/index.html"));
});

// POST localhost:3000/guardarNumero
app.post("/guardarNumero", function (req, res) {
  let dato_enviado_desde_cliente = req.body.numero;
  res.send("El numero ingresado es el " + dato_enviado_desde_cliente);
});

app.get("/otroMenu", function (req, res) {
  res.sendFile(path.resolve("../cliente/listado.html"));
});

app.post("/cargarContenidoTabla", function (req, res) {
  let contenido_tabla =
    "<tr><td>Nombre</td><td>Color</td></tr><tr><td>Emiliano</td><td>Azul</td></tr><tr><td>Juan</td><td>Rojo</td></tr><tr><td>Laura</td><td>Amarillo</td></tr>";
  res.send(contenido_tabla);
});

//Servidor con el puerto
app.listen(3000, function () {
  console.log("Servidor funcionando correctamente");
});
