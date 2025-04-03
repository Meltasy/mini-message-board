const db = require('../db/queries')
const dateTime = require('../helpers/dateTime')

async function getMessages(req, res) {
  const messages = await db.getAllMessages()
  console.log('Messages: ', messages)
  res.render('index', {
    title: 'Mini Message Board',
    messages: messages,
    dateTime: dateTime
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
  console.log('Messsage Detail: ', messageDetail)
  res.render('messageDetail', {
    title: 'Message Detail',
    messageDetail: messageDetail,
    dateTime: dateTime
  })
}

module.exports = {
  getMessages,
  createMessageGet,
  createMessagePost,
  getMessageDetail,
}
