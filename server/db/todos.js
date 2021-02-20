//@ts-check

const Knex = require('knex');
const connection = require('./connection')

function getTodos (db = connection) {
  return db("task").select()
}

function toggleTask (id, db = connection) {
  return db("task")
    .select()
    .where("id", id)
    .then((task) => {
      let newCompleted;
      if(task[0].completed === 0) {
        newCompleted = 1;
      } else {
        newCompleted = 0;
      }

      return db("task")
        .where("id", id)
        .update({completed: newCompleted})
        .then(() => newCompleted);
    });
};

function addTask(task, db = connection) {
  return db("task")
    .insert({
      todoTask: task,
      completed: 0,
    })
    .then(ids => ids[0]);
};

function getTask(id, db = connection) {
  return db("task")
    .select()
    .where("id", id)
    .then(tasks => tasks[0]);
}

module.exports = {
  getTodos,
  toggleTask,
  addTask,
  getTask,
}
