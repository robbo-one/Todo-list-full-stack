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
    res.json()
    return null
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({ message: 'Somthing went wrong' })
  })
})

router.patch('/', (req, res) => {
  // console.log(req.body)
    db.updateTodo(req.body.id, req.body)
  .then((data)=> {
    res.json(data);
  }).catch((err)=>{
    res.json(err);
  })
})

router.delete('/', (req, res) =>{
  db.deleteTodo(req.body.id, req.body)
  .then((data)=> {
    res.json(data);
  }).catch((err)=>{
    res.json(err);
  })
})

module.exports = router