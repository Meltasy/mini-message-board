const pool = require('./pool')

async function getAllMessages() {
  const { rows } = await pool.query('SELECT * FROM messages')
  return rows
}

async function insertMessage(username, messagetext) {
  await pool.query('INSERT INTO messages (username, messagetext, added) VALUES ($1, $2, $3)', [username, messagetext, new Date()])
}

async function getOneMessageDetail(messageid) {
  const { rows } = await pool.query('SELECT * FROM messages WHERE id = $1', [messageid])
  return rows[0]
}

module.exports = {
  getAllMessages,
  insertMessage,
  getOneMessageDetail
}
