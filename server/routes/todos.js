const express = require('express')
const db = require('../db/todos')
const router = express.Router()


router.get('/', (req, res) => {
  db.getTodos()
  .then(todos => {
    res.json(todos)
  })
  .catch(err => {
    console.log(err)
    res.status(500)
  })
})


router.post('/', (req, res) => {
  console.log("route req", req.body.todo)
  db.addTodo(req.body.todo)
    .then(() => {
      res.sendStatus(200)
      return null
    })
    .catch(err => {
      console.log(err)
    })
})



router.delete('/', (req, res) => {
  db.deleteTodo(req.body.id)
    .then(() => {
      res.sendStatus(200)
      return null
    })
    .catch(err => {
      console.log(err)
    })
})

module.exports = router
