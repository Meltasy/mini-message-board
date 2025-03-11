const { Router } = require('express')
const messageRouter = Router()
const { getMessageById } = require('../controllers/messageController')

messageRouter.get('/', (req, res) => {
  res.render('messageDetail', { messages: messages })
})

messageRouter.get('/:messageId', getMessageById)

module.exports = messageRouter
