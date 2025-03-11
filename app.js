const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const path = require('node:path')
const assetsPath = path.join(__dirname, 'public')
const indexRouter = require('./routes/indexRouter')
const newRouter = require('./routes/newRouter')
const messageRouter = require('./routes/messageRouter')

app.listen(PORT, () => {
  console.log(`Mini message board listening on port ${PORT}`)
})

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.static(assetsPath))
app.use(express.urlencoded({ extended: true }))

app.use('/new', newRouter)
app.use('/message', messageRouter)
app.use('/', indexRouter)

app.use((err, req, res, next) => {
  console.error(err)
  res.status(err.statusCode || 500).send(err.message)
})
