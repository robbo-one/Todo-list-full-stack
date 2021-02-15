const express = require('express')
const { withRouter } = require('react-router-dom')

const { getTodos, addTodo, delTodo, updateTodo } = require('../db/todos')

const router = express.Router()

router.get('/', (req, res) => {
  getTodos()
    .then(results => {
      res.json(results)
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Uh Oh Spaghetti O!'})
    })
})

router.post('/', (req, res) => {
  addTodo(req.body.todo)
    .then(() => {
      console.log('item added')
      // res.json({})
      res.sendStatus(200)
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Uh Oh Spaghetti O!'})
    })
})

router.delete('/', (req, res) => {
  const id = req.body.id
  delTodo(id)
    .then(() => {
      res.sendStatus(200)
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Uh Oh Spaghetti O!'})
    })
})

router.patch('/', (req, res) => {
  const todo = req.body
  updateTodo(todo)
    .then(() => {
      res.sendStatus(200)
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Uh Oh Spaghetti O!'})
    })
})

module.exports = router