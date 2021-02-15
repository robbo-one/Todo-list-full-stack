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

router.put('/', (req, res) => {
  

})




module.exports = router