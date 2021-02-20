//@ts-check

const express = require('express')

const db = require("../db/todos")

const router = express.Router()
const { toggleTask } = require("../db/todos");

router.get("/", (req, res) => {
  db.getTodos()
    .then(results => {
      res.json({ todos: results });
      return null;
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
});

router.post("/:id/toggle", (req, res) => {
  toggleTask(req.params.id)
    .then(newCompleted => {
      res.json({
        id: Number(req.params.id),
        completed: newCompleted,
      })
    })

})

module.exports = router
