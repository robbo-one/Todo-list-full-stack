const express = require('express')

const db = require('../db/todos')

const router = express.Router()


router.get('/', (req, res) => {
  db.getTodos()
  .then(results => {
    res.json(results)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({ message: 'Somthing went wrong' })
  })
})

router.post('/', (req, res) => {
  db.addTodo(req.body.todo)
  .then(()=> {
    res.json(id)
    return null
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({ message: 'Somthing went wrong' })
  })
})

router.patch('/', (req, res) => {
  db.updateTask(req.body.id, req.body.newTodo)
  .then(() => {
    console.log('updated!')
    res.status(200)
    return null
  })
  .catch(err => {
    console.log(err)
    res.status(500).json ({ message: 'Somthing went wrong' })
  })
})


router.delete('/', (req, res) => {
  db.deleteTodo(req.body.id)
  .then(() => {
    console.log('deleted!')
    res.status(200)
    return null
  })
  .catch(err => {
    console.log(err)
    res.status(500)
  })
})




module.exports = router