const connection = require('./connection')

function getTodos (db = connection) {
  return db('todos')
    .select()
}

module.exports = {
  getTodos
}