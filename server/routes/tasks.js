const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.get('/', (req,res) => {
  db.getTasks()
    .then(tasks => {
			res.json(tasks)
		})
		.catch(err => {
			console.log(err)
			res.sendStatus(500).json({ message: 'Somthing went wrong' })
		})
})

router.post('/', (req,res) => {
	db.addTask(req.body.task, req.body.priority)
		.then(() => {
			res.sendStatus(200).json({ message: 'OK' })
			return null
		})
		.catch(err => {
			console.log(err)
			res.sendStatus(500).json({ message: 'Somthing went wrong' })
		})
})

router.patch('/', (req,res) => {
	db.updateTask(req.body.id, req.body.newTask, req.body.priority)
		.then(() => {
			res.sendStatus(200).json({ message: 'OK' })
			return null
		})
		.catch(err => {
			console.log(err)
			res.sendStatus(500).json({ message: 'Somthing went wrong' })
		})
})

router.delete('/', (req,res) => {
	db.deleteTask(req.body.id)
		.then(() => {
			res.sendStatus(200).json({ message: 'OK' })
			return null
		})
		.catch(err => {
			console.log(err)
			res.sendStatus(500).json({ message: 'Somthing went wrong' })
		})
})

module.exports = router