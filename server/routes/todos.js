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
  db.addTodo(req.body).then((todos) => {
    res.json(todos); //pass updated todo list to client API
  });
});

//Patch route request to update todo. Req body includes ?id, task, priority, completed
router.patch("/:id", (req, res) => {
  db.updateTodo(req.params.id, req.body) //form only has title and content
    .then((todos) => {
        res.json(todos);
      });
    })
