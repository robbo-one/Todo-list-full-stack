const knex = require('knex')
const config = require('./knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])

function getAllTasks(db = connection){
    return db('tasks')
    .select()
}

function addTasks(tasks, db = connection) {
    return db('tasks')
    .insert(task: )
    .then(ids => ids[0])
    }




module.exports = {
    getAllTasks,
    addTasks
}