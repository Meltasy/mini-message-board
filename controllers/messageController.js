const messages = require('../data/messageData')
const asyncHandler = require('express-async-handler')

const getMessageById = asyncHandler(async (req, res) => {
  const { messageId } = req.params

  const messageDetail = await messages.getMessageById(Number(messageId))

  if (!messageDetail) {
    res.status(404).send(`Message ${messageId} not found`)
    return
  }

  res.render('messageDetail', { messageDetail: messageDetail })
})

module.exports = { getMessageById }
