module.exports = {
  getDateTime() {
    const getDate = new Date().toString().split(' ')
    return getDate.slice(0, 3).join(' ') + ' ' + getDate[4].substring(0, 5)
  }
}
