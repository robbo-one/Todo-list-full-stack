const express = require('express')

const db = require('../db/tasksExportFunctions')

const router = express.Router()

router.get('/', (req, res) => {
  db.listTasks()
  .then(tasks => {
    res.json(tasks);
    return null;
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json({message: "Something when wrong"})
  })
})

router.post('/', (req, res) => {
  db.addTask(req.body.detail, req.body.completed)
  .then(() => {
    res.status(200).json({ message: 'Added!' })
    return null
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({message: "Something when wrong"})
  })
})

router.patch('/', (req, res) => {
  db.updateTask(req.body.id, req.body.newDetail)
  .then(() => {
    res.status(200).json({ message: 'Updated!' })
    return null
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({message: "Something when wrong"})
  })
})

router.delete('/', (req, res) => {
  db.deleteTask(req.body.id)
  .then(() => {
    res.status(200).json({ message: 'Deleted!' })
    return null
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({message: "Something when wrong"})
  })
})

module.exports = router


