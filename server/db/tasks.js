const connection = require('./connection')

function getTodos (db = connection) {
  return db('tasks').select()
}

module.exports = {
  getTodos
}