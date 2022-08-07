const express = require('express')
const router = express.Router()

const home = require('../controllers/home')

module.exports = (app) => {
  router.get('/', home.index)
  router.get('/buscar', home.search)
  app.use(router)
}
