const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Un schema/esquema es el modelo de datos o la forma de un documento

let modeloTareas = new Schema({
  nombre: String,
  detalle: String,
  finalizada: {
    type: Boolean,
    default: false,
  },
  fecha: String,
});

//exporto el modelo que creamos
module.exports = mongoose.model("tareas", modeloTareas);
