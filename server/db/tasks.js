const connection = require('./connection')

function getTodos (db = connection) {
  return db('tasks').select()
}

function addTodo (todo, db = connection){
  return db('tasks')
  .insert(todo)
}

function getTodo (id, db = connection){
  return db('tasks')
    .where('Todos.id', id)
    .first()
}

function updateTodo (id, task, priority, completed, db = connection){
  return db('tasks')
  .where('Tasks.id', id)
  .update({
    task: task,
    priority: priority,
    completed: completed
  })
}

function deleteTodo (id, db = connection){
  return db('tasks')
  .where('Tasks.id', id)
  .delete()
}


module.exports = {
  getTodos,
  addTodo,
  getTodo,
  updateTodo,
  deleteTodo
}