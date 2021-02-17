//Database functions
const config = require("./knexfile").development;
const connection = require("knex")(config);

// get a list of tasks, returns an array of objects
function getTasks (db = connection) {
  return db('tasks').select();
}

// function addTasks (db = connection) {
//   return db('tasks').select()
// }

// function updateTasks (db = connection) {
//   return db('tasks').select()
// }

// function deleteTasks (db = connection) {
//   return db('tasks').select()
// }

module.exports = {
  getTasks
  // addTasks,
  // updateTasks,
  // deleteTasks
}