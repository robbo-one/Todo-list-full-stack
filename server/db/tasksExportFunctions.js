const config = require("./knexfile").development;
const connection = require("knex")(config);

function listTasks (db = connection) {
  return db('tasks')
  .select();
}

function addTask (detail, completed, db = connection) {
  return db('tasks')
  .insert({
    detail: detail, 
    completed: false,
  });
}

module.exports = {
  listTasks,
  addTask,
}