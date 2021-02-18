const connection = require('./connection')

function getTasks (db = connection) {
  return db('tasks')
  .select()
}

function addTasks(task, db = connection) {
    return db('tasks')
    .insert(task)
    .then(ids => ids[0])
}

module.exports = {
    getTasks,
    addTasks
}