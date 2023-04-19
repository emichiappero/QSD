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

/* ------ READ ------ */
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

/* ------ CREATE ------ */
// Inserta una nueva tarea en la Base de Datos
app.post("/nuevaTarea", async function (req, res) {
  console.log(req.body);
  let task = new Tarea(req.body);
  await task.save();
  res.send("La tarea se registró correctamente!");
});

/* ------ UPDATE ------ */
//petición para ver el archivo editar.html
app.get("/tarea/:id/:nombre_tarea", function (req, res) {
  let id_tarea = req.params.id;
  let nom_tarea = req.params.nombre_tarea;
  res.sendFile(path.resolve("../cliente/editar.html"));
});

//petición para buscar información en la BD, sobre una tarea específica
app.post("/tarea/:id/:nombre_tarea", async function (req, res) {
  let id_tarea = req.params.id;
  let nom_tarea = req.params.nombre_tarea;
  let documento = await Tarea.findById(id_tarea); //consultamos la BD
  res.send(documento);
});

//Petición para MODIFICAR una tarea
app.put("/tarea/:id/:nombre_tarea", async function (req, res) {
  let id_tarea = req.params.id;
  let datos_recibidos = req.body; //{ nombre: "cortar el pasto", detalle: "bla blbla" }

  await Tarea.updateOne({ _id: id_tarea }, datos_recibidos);

  res.send("Tarea modificada correctamente!");
});

/* ------ DELETE ------ */

//Petición para ELIMINAR una tarea
app.get("/eliminar/:id", async function (req, res) {
  let id_tarea = req.params.id;

  await Tarea.findByIdAndRemove(id_tarea);

  res.redirect("/");
});

//puerto del servidor
app.listen(3000, function () {
  console.log("Servidor OK!!!");
});
