const { Router } = require('express')
const indexRouter = Router()
const { messages } = require('../data/messageData')

const getDateTime = () => {
  const getDate = new Date().toString().split(' ')
  return getDate.slice(0, 3).join(' ') + ' ' + getDate[4].substring(0, 5)
}

const getId = () => {
  return messages.length + 1
}

indexRouter.get('/', (req, res) => {
  res.render('index', { messages: messages })
})

indexRouter.post('/new', (req, res) => {
  const { userName, messageText } = req.body;
  messages.push({ id: getId(), user: userName, text: messageText, added: getDateTime() })
  res.redirect('/')
})

module.exports = indexRouter
