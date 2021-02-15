const express = require('express')
const db = require('../db/tasks')
const router = express.Router()

router.get('/', (req, res) => {
  db.getTasks()
  .then(tasks => {
    res.json(tasks)
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
    res.status(200)
    return null
  })
  .catch(err => {
    console.log(err)
    res.status(500)
  })
})


module.exports = router