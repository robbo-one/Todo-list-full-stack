const express = require('express')

const db = require('../db/tasks')

const router = express.Router()

// Route to get all the tasks

router.get('/', (req,res) => {
    db.getTasks()
    .then(results => {
        console.log('route got', results)
        res.json(results)
        return null
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'something went wrong, cheers'})
    })
})

module.exports = router
  