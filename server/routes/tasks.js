const express = require('express')

const db = require('../db/tasks')

const router = express.Router()


//get all the tasks
router.get('/', (req, res) => {
  db.getTasks()
    .then(results => {
        console.log('route got', results)
      res.json(results)
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

//post all the tasks
router.post('/', (req, res) => {
    db.addTask(req.body.task, req.body.priority)
    .then(addedTask => {
        res.status(200).json(addedTask)
        return null
    })
    .catch(err => {
        console.log(err)
        res.status(500)
      })
    })

    //update a task
    router.patch('/completed', (req, res) => {
        db.updateTask(req.body.id, req.body.newTask)
        .then(() => {
            console.log('updated')
            res.status(200).json({message: 'task'})
            return null
        })
        .catch(err => {
            console.log(err)
            res.status(500)
        })
    })

    //delete a task 
    router.delete('/', (req, res) => {
        db.deleteTask(req.body.id)
        .then(()=> {
            console.log('task deleted')
            res.status(200).json({message: 'task'})
            return null
        })
            .catch(err => {
                console.log(err)
                res.status(500)
        
        })
    })

module.exports = router