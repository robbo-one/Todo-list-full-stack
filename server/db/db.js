const connection = require('./connection')

function getTasks(db = connection) {
  return db('tasks')
    .select()
}

function addTask(task, priority, db = connection) {
  return db('tasks')
    .insert({task: task, priority: priority, completed: 'no'})
}

function updateTask(id, newTask, priority, db = connection) {
  return db('tasks')
    .where('id', id)
    .update({task: newTask, priority: priority})
}

function deleteTask(id, db = connection) {
  return db('tasks')
    .where('id', id)
    .del()
}

module.exports = {
  getTasks,
  addTask,
  updateTask,
  deleteTask
}