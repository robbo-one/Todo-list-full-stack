//@ts-check

const connection = require('./connection')

function getTodos (db = connection) {
  return db("task").select()
}

module.exports = {
  getTodos
}