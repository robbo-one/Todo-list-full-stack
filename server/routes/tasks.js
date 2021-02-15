const express = require('express')

const db = require('../db/tasks')

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



module.exports = router