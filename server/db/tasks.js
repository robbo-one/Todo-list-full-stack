const connection = require('./connection')

function getTasks (db = connection) {
  return db('tasks')
  .select()
}

function addTask (task, priority, db = connection) {
  return db('tasks')
  .insert({task: task, priority: priority, completed: 'no'})
}

module.exports = {
 getTasks,
 addTask
}