const path = require('path')
const exphbs = require('express-handlebars')
const errorHandler = require('errorhandler')
const express = require('express')

//importar Handlebars seguidamente del de abajo para que pueda iterar en la vista frontend
//cliente
const Handlebars = require('handlebars')
const {
  allowInsecurePrototypeAccess,
} = require('@handlebars/allow-prototype-access')

//para cargar las rutas
const routes = require('../routes/index')

module.exports = (app) => {
  //setting
  app.set('port', process.env.PORT || 3000)
  //las views
  app.set('views', path.join(__dirname, '../views'))
  //motor de plantillas handlebars
  app.engine(
    '.hbs',
    exphbs.engine({
      defaultLayout: 'main',
      partialsDir: path.join(app.get('views'), 'partials'),
      layoutsDir: path.join(app.get('views'), 'layouts'),
      extname: '.hbs',
      helpers: require('./helpers'),
      //agregar esta linea para que pueda iterar en la vista las imagenes
      handlebars: allowInsecurePrototypeAccess(Handlebars),
    })
  )

  //con esta sentencia arrabaca el middleware de habdlebars
  app.set('view engine', '.hbs')

  //para capturar datos de los formularios
  app.use(express.urlencoded({ extended: false }))
  //para manejar los likes de esta aplicacion (sirve para otras cosas no solamente para los likes)
  app.use(express.json())

  //routes
  routes(app)

  //static Files
  //para acceder solamente a los archivos publicos del sistema ejemplo imagenes
  app.use('/public', express.static(path.join(__dirname, '../public')))

  //errorhandlers
  if ('development' === app.get('env')) {
    app.use(errorHandler)
  }

  return app
}
