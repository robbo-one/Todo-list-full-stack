const connection = require('./connection')

function getTasks(db = connection) {
  return db('tasks')
    .select()
}

function addTasks(task, db = connection) {
  return db('tasks')
    .insert({task: task})
}

function updateTasks(newTask, db = connection) {
  return db('tasks')
    .where('id', newTask.id)
    .first()
}

function deleteTasks(id, db = connection) {
  return db('tasks')
    .where('id', id)
    .first()
}

module.exports = {
  getTasks,
  addTasks,
  updateTasks,
  deleteTasks
}