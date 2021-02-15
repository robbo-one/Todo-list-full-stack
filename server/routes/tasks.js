const express = require('express')

const db = require('../db/tasks')

const router = express.Router()

router.get('/', (req, res) => {
  db.getTodos()
    .then(results => {
      res.json(results)
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

router.post('/', (req, res) => {
  const todo = req.body
  db.addTodo(todo)
    .then(id => {
      res.sendStatus(200)
})
  .catch(err => {
    console.log(err)
    res.status(500).json({ message: 'Somthing went wrong' })
  })
})

router.patch('/:id',(req,res) => {
  const id = req.params.id
  const todo = req.body
  db.updateTodo(id, todo.task, todo.priority, todo.completed)
  .then(id => {
    res.sendStatus(200)
  })
})


module.exports = router