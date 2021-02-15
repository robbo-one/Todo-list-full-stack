const connection = require('./connection')

function getTasks (db = connection) {
  return db('tasks')
  .select()
}

module.exports = {
 getTasks
}