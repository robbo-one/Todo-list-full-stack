const connection = require('./connection')

function getTodos (db = connection) {
  return db('todos')
  .select()
}

function addTodo (todo, db = connection) {
  return db('todos')
  .insert({todo: todo,})
}

function updateTodo (id, newTodo, db = connection) {
  return db('todos')
  .where('id', id)
  .update({todo : newTodo})
}
function deleteTodo (id, db = connection) {
  return db('todos')
  .where('id', id)
  .del()

}

module.exports = {
 getTodos,
 addTodo,
 updateTodo,
 deleteTodo
}