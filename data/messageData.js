const getDateTime = () => {
  const getDate = new Date().toString().split(' ')
  return getDate.slice(0, 3).join(' ') + ' ' + getDate[4].substring(0, 5)
}

const messages = [
  {
    id: 1,
    user: 'Waly Dia',
    text: 'What\'s up, bro?',
    added: getDateTime(),
  },
  {
    id: 2,
    user: 'Guillaume Meurice',
    text: 'Up for something?',
    added: getDateTime(),
  },
  {
    id: 3,
    user: 'Juliette Arnaud',
    text: 'Let\'s do it, peeps!',
    added: getDateTime(),
  },
  {
    id: 4,
    user: 'Pierre-Emmanuel Barré',
    text: 'Come to Saint Roustan.',
    added: getDateTime(),
  },
]

async function getMessageById(messageId) {
  return messages.find(message => message.id === messageId)
}

module.exports = { messages, getMessageById }
