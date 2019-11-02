const express = require('express')
const app = express()
const path = require('path')
const helmet = require('helmet')
const morgan = require('morgan')
const mongoose = require('mongoose')

// import js
const defaults = require('./defaults')
const siteRoutes = require('./routes/siteRoutes')

// Zaman Damgası Alma
const getTimeForConsole = () => new Date(Date.now()).toLocaleString() + ':'

app.use('/', siteRoutes)
app.use(helmet())
app.use(morgan('combined'))
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, '..', 'frontend', 'html'))

mongoose.connect(defaults.site.dbUrl + defaults.site.dbName, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  app.listen(defaults.site.port, () => {
	  console.log(getTimeForConsole(), `${defaults.site.name}: http://localhost:${defaults.site.port}`)
  })
})
