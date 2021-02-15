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

module.exports = router