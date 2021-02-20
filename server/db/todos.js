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
}

module.exports = {
  getTodos,
  toggleTask
}
