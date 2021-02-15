const express = require('express')
const { withRouter } = require('react-router-dom')

const { getTodos } = require('../db/todos')

const router = express.Router()

router.get('/', (req, res) => {
  getTodos()
    .then(results => {
      console.log(results)
      res.json(results)
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Uh Oh Spaghetti O!'})
    })
})

router.post('/', (req, res) => {
  
})

module.exports = router