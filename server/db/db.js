const connection = require('./connection')

function getTasks(db = connection) {
  return db('tasks').select()
}

function addTask(task, db = connection) {
  return db('tasks')
  .insert({task_details: task, priority: 1, completed: 0})
  .then(ids => ids[0])
}

function updateTask(task, db = connection) {
  return db('tasks')
  .update(task)
  .where('id',task.id)
  .first()
}

function deleteTask(taskId, db = connection) {
  return db('tasks')
  .delete()
  .where("id", taskId)
}

module.exports = {
  getTasks,
  addTask,
  updateTask,
  deleteTask
}

