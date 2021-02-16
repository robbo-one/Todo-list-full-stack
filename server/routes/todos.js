//This is where API functions are written
//REST JSON API

const express = require("express");
const db = require("../db/todos");
const router = express.Router();

module.exports = router;

//Get list of todos
router.get("/", (req, res) => {
  db.getTodos()
    .then((todos) => {
      //todo list received from db as array of objects
      res.json(todos); //send back to api who called the request
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
});

//Add new todo - takes req body from form
router.post("/", (req, res) => {
  db.addTodo(req.body).then((todo) => {
    res.json(todo); //pass updated todo list to client API
  });
});
