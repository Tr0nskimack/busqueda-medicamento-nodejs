const Ctrl = {}
let Medicamento = require('../models/medicamentos')
const fs = require('fs-extra')
Ctrl.index = async (req, res) => {
  //me renderiza todos los medicamentos
  let medica = await Medicamento.find()
  res.render('index', { medica })
}

Ctrl.search = async (req, res) => {}
module.exports = Ctrl
