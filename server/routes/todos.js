const express = require('express')

const db = require('../db/todos')

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
  db.addTodo(req.body.todo)
  .then(()=> {
    return null
  })
  .catch(err => {
    res.status(500).json({ message: 'Somthing went wrong' })
  })
})

router.patch('/', (req, res) => {
  db.updateTodo(req.body)
  .then(()=> {
    return null
  })
  .catch(err => {
    console.log(err)
    res.status(500).json ({ message: 'Somthing went wrong' })
  })
})

router.delete('/', (req, res) => {
  db.delTodo(req.body.id)
  .then(() => {
      return null
  })
  .catch(err => {
    console.log(err)
    res.status(500).json ({ message: 'Somthing went wrong' })
  })
})




module.exports = router