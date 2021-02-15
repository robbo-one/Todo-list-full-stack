const connection = require('./connection')

function getTodos (db = connection) {
  return db('tasks')
  .select()
}

function addTodo (task, priority, db = connection) {
  return db('tasks')
  .insert({task: task, priority: priority, completed: 'no'})
}

function updateTodo (id, newTask, db = connection) {
  return db('tasks')
  .where('id', id)
  .update({task : newTask})
}

module.exports = {
 getTodos,
 addTodo,
 updateTodo
}