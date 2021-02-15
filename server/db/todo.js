const connection = require('./connection')

function getTodo (db = connection) {
  return db('todo').select()
}

module.exports = {
  getTodo,
}