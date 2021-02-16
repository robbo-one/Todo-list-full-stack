const express = require("express")

const db = require("../db/db")

const router = express.Router()

function routerGetTask(res) {
    db.getTasks()
        .then(list => {
            res.json(list)
        })
}

router.get('/', (req, res) => {
    routerGetTask(res)
})

router.post('/', (req,res) => {
    console.log(req.body)
    db.addTask(req.body)
        .then(id => {
            db.getTaskById(id)
            .then(task => {
                res.json(task) // add this to global state of todos
            })
            // res.json(id)
        })
})

router.patch('/', (req, res) => {
    db.updateTask(req.body)
        .then(itemsUpdated => {
            console.log(itemsUpdated)
            res.json(itemsUpdated)
        })
})

router.delete('/', (req, res) => {
    db.deleteTask(req.body)
        .then(itemsDeleted => {
            console.log(itemsDeleted)
            res.json(itemsDeleted)
        })
})

module.exports = router