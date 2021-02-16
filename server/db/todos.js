//Database functions

const config = require("./knexfile").development;
const connection = require("knex")(config);

module.exports = {
  getTodos,
  addTodo,
};

//Get a list of tasks. Will return array of objects
function getTodos(db = connection) {
  return db("todos").select(); //will jump back to routes/tasks
  console.log(todos);
}

//Append new todo to database and return updated todo list. id will be generated. inbound to database ?stringify
function addTodo(newTodo, db = connection) {
  console.log(newTodo);
  return db("todos")
    .insert(newTodo) //append newTodo to db
    .then(() => {
      //id is what is being returned.
      return getTodos();
    });
  //I want to return this to the route so the route can pass to client
}

//Line 22 anon function is when you don't need to add parameters, you just call the function.
//Remember that getTodos() needs to be called, not just returned
