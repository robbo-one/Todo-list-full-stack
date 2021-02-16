const express = require('express')
const db = require('../db/tasks')
const router = express.Router()

router.get('/', (req, res) => {
  db.getTasks()
  .then(tasks => {
    res.json(tasks)
    return null
  })
  .catch(err => {
    console.log(err)
    res.status(500)
  })
})

router.post('/', (req, res) => {
  // console.log(req.body)
  db.addTask(req.body.task, req.body.priority)
  .then(() => {
    res.sendStatus(200)
    return null
  })
  .catch(err => {
    console.log(err)
    res.status(500)
  })
})

router.patch('/', (req, res) => {
  db.updateTask(req.body.id, req.body.newTask)
  .then(() => {
    console.log('updated!')
    res.sendStatus(200)
    return null
  })
  .catch(err => {
    console.log(err)
    res.status(500)
  })
})

router.patch('/completed', (req, res) => {
  db.completeToggle(req.body.id, req.body.completedStatus)
  .then(() => {
    console.log('completed status updated!')
    res.sendStatus(200)
    return null
  })
  .catch(err => {
    console.log(err)
    res.status(500)
  })
})

router.delete('/', (req, res) => {
  db.deleteTask(req.body.id)
  .then(() => {
    // console.log('deleted!')
    res.sendStatus(200)
    return null
  })
  .catch(err => {
    console.log(err)
    res.status(500)
  })
  
})


module.exports = router