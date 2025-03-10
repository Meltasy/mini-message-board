const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const path = require('node:path')
const assetsPath = path.join(__dirname, 'public')

const links = [
  { href: '/', text: 'Home' },
  { href: 'new', text: 'New Message' },
]

const messages = [
  {
    text: 'What\'s up, bro?',
    user: 'Waly Dia',
    added: new Date().toDateString(),
  },
  {
    text: 'Up for something?',
    user: 'Guillaume Meurice',
    added: new Date().toDateString(),
  },
  {
    text: 'Let\'s do it, peeps!',
    user: 'Juliette Arnaud',
    added: new Date().toDateString(),
  },
]

app.listen(PORT, () => {
  console.log(`Mini message board listening on port ${PORT}`)
})

// app.get('/', (req, res) => res.send('My mini message board in the making!'))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.static(assetsPath))

app.get('/', (req, res) => {
  res.render('index', { links: links, messages: messages })
})

app.get('/new', (req, res) => {
  res.render('new', { links: links })
})

app.use((err, req, res, next) => {
  console.error(err)
  res.status(err.statusCode || 500).send(err.message)
})

// To be used with above 'err.statusCode' and relpace 'author' below:
// if (!author) {
//   throw new CustomNotFoundError("Author not found");
// }
