const express = require('express')

const db = require('../db/tasksExportFunctions')

const router = express.Router()

router.get("/", (req, res) => {
  db.getTasks()
  .then(tasks => {
    res.json(tasks);
    return null;
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json({message: "Something when wrong"})
  })
})