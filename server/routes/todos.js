const express = require("express")

const db = require("../db/db")

const router = express.Router()

router.get('/', (req, res) => {
    db.getTasks()
        .then(list => {
            res.json(list)
        })
})

router.post('/', (req,res) => {
    console.log(req.body)
    db.addTask(req.body)
        .then(id => {
            db.getTaskById(id)
            .then(task => {
                res.json(task)
            })
            // res.json(id)
        })
})

module.exports = router