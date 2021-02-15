const connection = require('./connection')

function getTodos (db = connection) {
  return db('todos')
  .select()
}

function addTodo (todo, db = connection) {
  return db('todos')
  .insert({'todo': todo, completed: 'false'})

}


function updateTodo (id, todo, db = connection) {
  return db('todos')
  .where('id', id)
  .update(todo)
}
function deleteTodo (id, db = connection) {
  return db('todos')
  .where('id', id)
  .del()

}

module.exports = {
 getTodos,
 addTodo,
 updateTodo,
 deleteTodo
}