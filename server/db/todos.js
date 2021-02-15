//Database functions

const config = require("./knexfile").development;
const connection = require("knex")(config);

module.exports = {
  getTodos,
}

//Get a list of tasks. Will return array of objects
function getTodos(db = connection) {
  return db("todos").select(); //will jump back to routes/tasks
  console.log(todos);
}

