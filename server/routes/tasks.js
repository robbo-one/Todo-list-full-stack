const express = require("express")

const db = require("../db/db")

const router = express.Router()

router.get("/", (req, res)=> {
  db.getTasks()
  .then(list => {
    res.json(list)
  })
})

router.post("/", (req, res) => {
  console.log(req.body)
  db.addTask(req.body)
    .then(id => {
      res.json(id)
    })
    .catch(err => {
      console.log("error: ",err)
      res.status(500).send(err)
    })
})

module.exports = router