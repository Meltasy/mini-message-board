const { Router } = require('express')
const messageRouter = Router()
const messageController = require('../controllers/messageController')

messageRouter.get('/', messageController.getMessages)
messageRouter.get('/new', messageController.createMessageGet)
messageRouter.post('/new', messageController.createMessagePost)
messageRouter.get('/message', messageController.getMessageDetail)

// const { getMessageById } = require('../controllers/messageController')

// messageRouter.get('/', (req, res) => {
//   res.render('messageDetail', { messages: messages })
// })

// messageRouter.get('/:messageId', getMessageById)

module.exports = messageRouter
