const express = require('express')

const db = require('../db/todo')

const router = express.Router()

router.get('/', (req, res) => {
  db.getTodo()
  .then(results => {
    console.log(results)
    res.json(results)
    return null
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({ message: 'Somthing went wrong' })
  })
})

router.post('/', (req, res) => {
  const todo = {
    task: req.body.task,
    completed: req.body.completed
  }

  db.addTodo(todo)
  .then(results => {
    console.log(results)
    res.json({results: results})
    return null
  })

  .catch(err => {
    console.log(err)
    res.status(500).json({message: 'Hefe ate all the cheese feelsbadman'})
  })
})

module.exports = router