const express = require('express')
const config = require('./server/config')
require('./database')

const app = config(express())

app.listen(app.get('port'), () => {
  console.log('App on port', app.get('port'))
})
