const mongoose = require('mongoose')
const { Schema } = mongoose
const path = require('path')

const MedicamentosSchema = new Schema({
  codigo: { type: Number },
  producto: { type: String },
  fecha_vencimiento: { type: String },
  laboratorio: { type: String },
  precio: { type: Number },
  pedido: { type: Number },
  total: { type: Number },
})
module.exports = mongoose.model('Medicamento', MedicamentosSchema)
