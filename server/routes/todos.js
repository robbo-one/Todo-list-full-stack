const express = require('express')
const { getTokenDecoder } = require('authenticare/server')

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

router.post('/', getTokenDecoder(), (req, res) => {
  const user = req.user
  addTodo(req.body.todo, user)
    .then(() => {
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

router.patch('/', getTokenDecoder(), (req, res) => {
  const todo = req.body
  const user = req.user
  updateTodo(todo, user)
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