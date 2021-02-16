const connection = require('./connection')

function getTasks(db = connection) {
    return db('todos').select()
}

function addTask(task, db = connection) {
    // console.log(task)
    return db('todos')
    .insert({task_details: task.task_details, priority: 1, completed: 0})
    .then(ids => ids[0])
    // .then(getTasks)
}

function getTaskById(id, db = connection) {
    return db('todos')
    .select()
    .where("id", id)
    .first()
}

function updateTask(todo, db = connection) {
    console.logo(todo.completed)
    return db('todos')
    .update({completed: todo.completed})
    .where("id", todo.id)
    .then(updatedItems => {
        console.log("items updated: ", updatedItems)

    })
    // .then(getTasks)
}

function deleteTask(todo, db = connection) {
    return db('todos')
    .where("id",todo.id)
    .delete()
    .then(deletedItems => {
        console.log("items deleted: ", deletedItems)
    })
}

module.exports = {
    getTasks,
    addTask,
    getTaskById,
    updateTask,
    deleteTask
}