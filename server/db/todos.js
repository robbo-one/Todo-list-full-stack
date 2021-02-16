const connection = require('./connection')

function getTodos (db = connection) {
  return db('todos')
  .select()
}

function addTodo (newTodo, db = connection) {
  return db('todos')
  .insert({task: newTodo, completed: false })

}

function updateTodo (todo, db = connection) {
  return db('todos')
  .where('id', todo.id)
  .update({task: todo.task, completed: todo.completed})
}

function delTodo (id, db = connection) {
  return db('todos')
  .where('id', id)
  .del()

}

module.exports = {
 getTodos,
 addTodo,
 updateTodo,
 delTodo
}