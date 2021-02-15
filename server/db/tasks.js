const connection = require('./connection')

function getTasks (db = connection) {
  return db('tasks')
  .select()
}

function addTask (task, priority, db = connection) {
  return db('tasks')
  .insert({task: task, priority: priority, completed: 'no'})
}

function updateTask (id, newTask, db = connection) {
  return db('tasks')
  .where('id', id)
  .update({task : newTask})
}

module.exports = {
 getTasks,
 addTask,
 updateTask
}