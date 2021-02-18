const connection = require('./connection')

function getTasks (db = connection) {
  return db('tasks')
  .select()
}

function addTasks(task, db = connection) {
    return db('tasks')
    .insert(task)
    .then(ids => ids[0])
}

function updateTasks (id, task, db = connection){

    // task = {
    //     task: 'do something',
    //     priority
    //      com
    // }

    return db('tasks')
    .where('Tasks.id', id)
    // .update({
    //   task: task.task,
    //   priority: task.priority,
    //   completed: task.completed
    // })
    .update(task)
  }


  function deleteTasks (id, db = connection){
    return db('tasks')
    .where('Tasks.id', id)
    .delete()
  }


module.exports = {
    getTasks,
    addTasks,
    updateTasks,
    deleteTasks
}