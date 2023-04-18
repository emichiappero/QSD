// Paquetes y módulos
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");

mongoose
  .connect(
    "mongodb+srv://emichiappero:lalala123@cluster0.hl2u8.mongodb.net/QSD_TodoList?retryWrites=true&w=majority"
  )
  .then(function (db) {
    console.log("Conectado a la Base de Datos");
  })
  .catch(function (err) {
    console.log(err);
  });

//Configuraciones
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", express.static(path.resolve("../cliente/")));

//Modelos de datos
const Tarea = require("./models/Tareas");

//Rutas
app.get("/", function (req, res) {
  res.sendFile(path.resolve("../cliente/index.html"));
});

app.get("/prueba", async function (req, res) {
  let documentos = await Tarea.find();

  console.log(documentos);

  res.send(documentos);
});

//puerto del servidor
app.listen(3000, function () {
  console.log("Servidor OK!!!");
});
