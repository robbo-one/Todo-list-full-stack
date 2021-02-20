const express = require("express");

const db = require("../db/tasks");

const router = express.Router();

router.get("/", (req, res) => {
  db.getTasks()
    .then((tasks) => {
      res.json(tasks);
      return null;
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({message: "Something went wrong"});
    });
});

router.post("/", (req, res) => {
  db.addTask(req.body.detail)
    .then(() => {
      res.status(200).json({message: "OK"});
      return null;
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({message: "Something went wrong"});
    });
});

module.exports = router;
