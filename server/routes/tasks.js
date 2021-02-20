const express = require('express')

const db = require('../db/tasks')

const router = express.Router()

router.get('/', (req, res) => {
  db.getTasks()
    .then((tasks) => {
      res.json(tasks)
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

// router.get('/', (req, res) => {
//   db.getTasks()
//     .then(results => {
//       res.json({ tasks: results })
//       return null
//     })
//     .catch(err => {
//       console.log(err)
//       res.status(500).json({ message: 'Something went wrong' })
//     })
// })

// router.get('/', (req, res) => {
//   db.getTasks()
//     .then(results => {
//       res.json({ tasks: results })
//       return null
//     })
//     .catch(err => {
//       console.log(err)
//       res.status(500).json({ message: 'Something went wrong' })
//     })
// })

// router.get('/', (req, res) => {
//   db.getTasks()
//     .then(results => {
//       res.json({ tasks: results })
//       return null
//     })
//     .catch(err => {
//       console.log(err)
//       res.status(500).json({ message: 'Something went wrong' })
//     })
// })

module.exports = router