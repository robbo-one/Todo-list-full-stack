const express = require('express')
const path = require('path')

const server = express()

const tasksRoutes = require('./routes/tasks')

server.use(express.json())
server.use(express.static(path.join('server', 'public')))

server.use('/tasks', tasksRoutes)

module.exports = server
