const connection = require('./connection')

function getTodos (db = connection) {
  return db('todos')
  .select()
}

function getTodoById(id, db = connection) {
  return db('todos')
    .select()
    .where('id', id)
    .first()
}

function addTodo (todo, db = connection) {
  return db('todos')
  .insert({todo: todo,  completed: 'false'})
  .then(ids => {
    return getTodoById(ids[0])
  })
}

function updateTodo (id, todo, db = connection) {
  return db('todos')
  .where('id', id)
  .update(todo)
}

function deleteTodo (id, todo, db = connection){
  return db ('todos')
  .where('id',id)
  .delete(todo)
}

module.exports = {
 getTodos,
 addTodo,
 updateTodo,
 deleteTodo
}