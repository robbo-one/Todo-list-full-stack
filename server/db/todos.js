//Database functions

const config = require("./knexfile").development;
const connection = require("knex")(config);

module.exports = {
  getTodos,
  addTodo,
  updateTodo
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
      //id by default is returned. could have id inside brackets. anon function - no need for parameters, just call
      return getTodos();
    });
  //I want to return this to the route so the route can pass to client
}

//Update task, priority or completed field in a todo item when id is selected. returns id so that this can be retrieved
function updateTodo(id, updatedTodo, db = connection) {
  console.log(updateTodo)
  return db("todos").update(updatedTodo).where("todos.id", id) 
  .then(() => {
    return getTodos()//jumps back to routes
  })
}
