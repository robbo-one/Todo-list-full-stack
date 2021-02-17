const { connect } = require('../routes/todo')
const connection = require('./connection')

function getTodo (db = connection) {
  return db('todos').select()
}

function addTodo (todo, db = connection) {
  return db('todos').insert(todo)
  .then(ids => ids[0])
}

function deleteTodo (id, db = connection) {
  return db('todos').delete().where('id', id)
  .then(rowCount => {
    console.log(rowCount)
    return rowCount
  })
}

module.exports = {
  getTodo,
  addTodo,
  deleteTodo
}