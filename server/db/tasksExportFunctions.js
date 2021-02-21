const config = require("./knexfile").development;
const connection = require("knex")(config);

function listTasks (db = connection) {
  return db('tasks').select();
}

// function addTask (detail, db = connection) {
//   return db('tasks').insert({
//     detail: detail
//   })
// }

module.exports = {
  listTasks
  // addTask
}