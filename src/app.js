// Requires
const express = require('express')
const methodOverride = require('method-override')
const cors = require('cors')
require('dotenv').config()
// const mongoose = require('mongoose')

// Environment Variables
const PORT = process.env.PORT

// Inicializar
const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride())

// Importar rutas
const appRoutes = require('./routes/app')

// Rutas
app.use('/', appRoutes)

app.listen(PORT, function () {
  console.log(`🚀 Server is running on http://localhost:${PORT} 🚀`)
})
