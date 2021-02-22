const knex = require('knex')
const config = require('./knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])

function getTasks(db = connection){
    return db('tasks')
    .select()
}

function findTask(id, db = connection) {
    return db('tasks')
        .where('id', id)
        .select()
        .first()
}

function addTask(task, priority, db =connection){
    return db('tasks')
    .insert({task : task, priority : priority, completed : 'no'})
    .then((ids) => {
        return findTask(ids[0], db)
    })
}

function updateTask (id, newTask, db =connection) {
    return db('tasks')
    .where('id', id)
    .update({task : newTask})
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
    deleteTask,
    }