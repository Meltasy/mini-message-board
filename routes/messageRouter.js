const { Router } = require('express')
const messageRouter = Router()
const messageController = require('../controllers/messageController')

messageRouter.get('/', messageController.getMessages)
messageRouter.get('/new', messageController.createMessageGet)
messageRouter.post('/new', messageController.createMessagePost)
messageRouter.get('/message', messageController.getMessageDetail)

module.exports = messageRouter
