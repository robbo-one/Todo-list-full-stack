const express = require('express')
const { getTasks, addTasks, updateTasks, deleteTasks } = require('../db/tasks')
const router = express.Router()


router.get('/', (req, res) => {
    getTasks()
      .then(results => {
        res.json(results)
        console.log(results)
        return null
      })
      .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'It is broken.'})
      })
  })


  router.post('/', (req,res) => {
    const task = { 
        task: req.body.task,
        priority: req.body.priority,
        completed: req.body.completed
    }
    addTasks(task)
      .then(id => {
        res.json({ id: id })
      })
      .catch(err => {
        console.log(err)
        res.status(500).json({message: "It's broken."})
      })
  })

  router.patch('/:id',(req,res) => {
    const id = req.params.id
    const task = req.body
    updateTasks(id, task)
    .then(() => {
      res.sendStatus(200)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({message: "It's broken."})
      })
  })
  

  router.delete('/:id', (req,res) => {
    const id = req.params.id
    deleteTasks(id)
      .then(()=>{
        res.sendStatus(200)
      })
      .catch(err => {
        console.log(err)
        res.status(500).json({message: "It's broken."})
      })
  })


module.exports = router