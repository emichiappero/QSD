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

//Sitio web principal (index)
app.get("/", function (req, res) {
  res.sendFile(path.resolve("../cliente/index.html"));
});

// Buscar en la base de datos los documentos de Tareaas
app.get("/prueba", async function (req, res) {
  let documentos = await Tarea.find();

  console.log(documentos);

  res.send(documentos);
});

// Inserta una nueva tarea en la Base de Datos
app.post("/nuevaTarea", async function (req, res) {
  console.log(req.body);
  let task = new Tarea(req.body);
  await task.save();
  res.send("La tarea se registró correctamente!");
});

// Actualiza la tarea con _id enviado por la ruta
app.get("/editar/:id", async function (req, res) {
  let id_enviado = req.params.id;

  //Forma 1
  /* let task = await Tarea.findById(id_enviado);
  task.nombre = "Tarea modificada";
  task.detall = "bla bla bla";
  await task.save(); */

  //Forma 2
  let task = await Tarea.updateOne(
    { _id: id_enviado },
    { nombre: "Tarea AAAA" }
  );
  console.log(task);

  res.send("Estamos por editar la tarea con ID = " + id_enviado);
});

//puerto del servidor
app.listen(3000, function () {
  console.log("Servidor OK!!!");
});
