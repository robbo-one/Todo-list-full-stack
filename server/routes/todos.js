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
      console.log(err);
      res.status(500).send(err.message);
    });
});

//Add new todo - takes req body from form
router.post("/", (req, res) => {
  const newTodo = { task: req.body.task, priority: 1, completed: 0 }; //turns string into object with key value pairs
  db.addTodo(newTodo)
    .then((task) => {
      //console.log(todo)//this gives a single new object with key value pairs
      res.json(task); //pass updated todo list to client API
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err.message);
    });
});

//Patch route request to update todo. Req body includes ?id, task, priority, completed
router.patch("/:id", (req, res) => {
  db.updateTodo(req.params.id, req.body) //form only has title and content
    .then((todos) => {
      res.json(todos);
    });
});

//Delete todo
router.delete("/", (req, res) => {
  db.deleteTodo(req.body.id).then(() => {
    return null;
  });
});
