const config = require("./knexfile").development;
const connection = require("knex")(config);

function listTasks (db = connection) {
  return db('tasks')
  .select();
}

function addTask (detail, db = connection) {
  return db('tasks')
  .insert({
    detail: detail, 
    completed: false,
  });
}

function updateTask (id, newDetail, db = connection) {
  return db('tasks')
  .where('id', id)
  .update({detail: newDetail})
}

module.exports = {
  listTasks,
  addTask,
  updateTask,
}