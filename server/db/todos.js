const connection = require('./connection')

function getTodos (db = connection) {
  return db('todos')
  .select()
}

function addTodo (todo, db = connection) {
  return db('todos')
  .insert({text: todo, priority: 3, completed: false})
}

function deleteTodo (id, db = connection) {
  return db('todos')
  .where('id', id).delete()}


module.exports = {
 getTodos,
 addTodo,
 deleteTodo
}