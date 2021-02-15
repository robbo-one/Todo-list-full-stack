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

//Append new todo to database and return updated todo list. id will be generated. inbound to database so use stringify
function addTodo(newTodo, db = connection) {
  console.log(newTodo);
  newTodo = JSON.stringify(newTodo);
  return db("todos")
    .insert(newTodo) //append newWidget to db
    .then("todos");
  //I want to return this to the route so the route can pass to client
}

//Add a new blog post and return newly created post. Title and para given, id, date and comment count automatically added. Inbound to database so use stringify.
function addPost(post, db = connection) {
  console.log(post);
  post.paragraphs = JSON.stringify(post.paragraphs);
  return db("posts")
    .insert(post)
    .debug()
    .then((ids) => ids[0]); //returns id - jumps to back to routes.
}
