//Database functions

const config = require("./knexfile").development;
const connection = require("knex")(config);

module.exports = {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo
};

//Get a list of tasks. Will return array of objects
function getTodos(db = connection) {
  return db("todos").select(); //will jump back to routes/tasks
  console.log(todos);
}

function getTodoById(id, db = connection) {
  return db("todos").where("todos.id", id);
}

//Append new todo to database 
function addTodo(newTodo, db = connection) {
  console.log(newTodo);
  return db("todos")
    .insert(newTodo) //append newTodo to db
    .then((ids) => {
      //console.log(ids) //returns an array with one id
      //id by default is returned. could have id inside brackets. anon function - no need for parameters, just call
      // return getTodos();
      return getTodoById(ids[0]); //return to route then back to client side
      
    });
}

//Update task, priority or completed field in a todo item when id is selected. returns id so that this can be retrieved
function updateTodo(id, updatedTodo, db = connection) {
  console.log(updateTodo);
  return db("todos")
    .update(updatedTodo)
    .where("todos.id", id)
    .then(() => { //does this give an id?
      return getTodos(); //jumps back to routes
    });
}

//Delete todo
function deleteTodo(id, db = connection) {
  return db("todos")
  .where('id', id)
  .delete()
}