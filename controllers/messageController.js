const db = require('../db/queries')

async function getMessages(req, res) {
  const messages = await db.getAllMessages()
  res.render('index', {
    title: 'Mini Message Board',
    messages: messages,
  })
}

async function createMessageGet(req, res) {
  res.render('form', {
    title: 'New Message'
  })
}

async function createMessagePost(req, res) {
  const { username, messagetext } = req.body
  await db.insertMessage(username, messagetext)
  res.redirect('/')
}

async function getMessageDetail(req, res) {
  const searchid = req.query.id
  const messageDetail = await db.getOneMessageDetail(searchid)
  res.render('messageDetail', {
    title: 'Message Detail',
    messageDetail: messageDetail,
  })
}

module.exports = {
  getMessages,
  createMessageGet,
  createMessagePost,
  getMessageDetail
}
