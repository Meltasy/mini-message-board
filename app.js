require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORTUI
const path = require('node:path')
const assetsPath = path.join(__dirname, 'public')
const messageRouter = require('./routes/messageRouter')

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Mini message board listening on port ${PORT}`)
})

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.static(assetsPath))
app.use(express.urlencoded({ extended: true }))

app.use('/', messageRouter)

app.use((err, req, res, next) => {
  console.error(err)
  res.status(err.statusCode || 500).send(err.message)
})
