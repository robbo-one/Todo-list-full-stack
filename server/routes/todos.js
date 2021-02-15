//@ts-check

const express = require('express')

const db = require("../db/todos")

const router = express.Router()

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

module.exports = router