//Paquetes y módulos
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");

//Conexión con la BD
mongoose
  .connect(
    "mongodb+srv://emichiappero:lalala123@cluster0.hl2u8.mongodb.net/QSD_gastos?retryWrites=true&w=majority"
  )
  .then(function (db) {
    console.log("Conectado con la BD");
  })
  .catch(function (err) {
    console.log(err);
  });

//Configuración
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", express.static(path.resolve("../cliente/")));

const Gasto = require("./models/gastos");

//Ruta ----> INICIO
app.get("/", function (req, res) {
  res.sendFile(path.resolve("../cliente/index.html"));
});

//Ruta ----> Agregar Gastos
app.get("/agregar", function (req, res) {
  res.sendFile(path.resolve("../cliente/nuevo_gasto.html"));
});

//Ruta ----> Guardar un nuevo Gasto en la BD
app.post("/nuevo", async function (req, res) {
  let datos_enviados = req.body;
  let nuevo_gasto = new Gasto(datos_enviados);
  await nuevo_gasto.save();
  res.send("El gasto se creó correctamente");
});

//Ruta ---> Mostrar Listado de Gastos
app.get("/listado", function (req, res) {
  res.sendFile(path.resolve("../cliente/listado_gastos.html"));
});

//Ruta ----> Obtener listado de Gastos de la BD
app.get("/obtener_gastos", async function (req, res) {
  let docs = await Gasto.find();
  res.send(docs);
});

//Ruta ----> Eliminar un gasto de la BD
app.delete("/eliminar/:id", async function (req, res) {
  let id_enviado = req.params.id;
  await Gasto.findByIdAndRemove(id_enviado);
  res.send("Gasto eliminado correctamente");
});

//Puerto y escucha del servidor
app.listen(3000, function () {
  console.log("--------------------------------------");
  console.log("Servidor funcionando corrrrrrrrrrectamente");
});
