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

function completeToggle (id, completedStatus, db = connection) {
  const status = completedStatus == 'no' ? 'yes' : 'no'
  return db('tasks')
  .where('id', id)
  .update({completed : status})
}

function deleteTask (id, db = connection) {
  return db('tasks')
  .where('id', id)
  .del()
}

module.exports = {
 getTasks,
 addTask,
 updateTask,
 completeToggle,
 deleteTask
}