const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Gasto = new Schema({
  tipo: String,
  monto: Number,
  descripcion: String,
  fecha: String,
});

module.exports = mongoose.model("Gastos", Gasto);
