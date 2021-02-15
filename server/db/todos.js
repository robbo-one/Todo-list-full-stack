const connection = require('./connection')

function getTodos (db = connection) {
  return db('todos')
    .select()
}

function addTodo (newTodo, db = connection) {
  return db('todos')
    .insert(newTodo)
}

module.exports = {
  getTodos,
  addTodo
}