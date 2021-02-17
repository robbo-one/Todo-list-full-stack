const connection = require('./connection')

function getTodos (db = connection) {
  return db('todos')
    .select()
}

function addTodo (newTodo, user, db = connection) {
  return db('todos')
    .insert({
      task: newTodo,
      priority: 'low',
      completed: false,
      added_by_user: user.id
    })
}

function delTodo (id, db = connection) {
  return db('todos')
    .where('id', id)
    .delete()
}

function updateTodo (todo, db = connection) {
  return db('todos')
    .where('id', todo.id)
    .update({
      task: todo.task,
      priority: todo.priority,
      completed: todo.completed
    })
}

module.exports = {
  getTodos,
  addTodo,
  delTodo,
  updateTodo
}