const connection = require('./connection')

function getTasks(db = connection) {
    return db('todos').select()
}

function addTask(task, db = connection) {
    // console.log(task)
    return db('todos')
    .insert({task_details: task.task_details, priority: 1, completed: 0})
    .then(ids => ids[0])
}

function getTaskById(id, db = connection) {
    return db('todos')
    .select()
    .where("id", id)
    .first()
}

module.exports = {
    getTasks,
    addTask,
    getTaskById
}