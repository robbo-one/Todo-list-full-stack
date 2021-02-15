const express = require('express')
const path = require('path')
const tasksRoute = require('./routes/tasks')

const server = express()

server.use("/api/v1/tasks", tasksRoute)

server.use(express.json())
server.use(express.static(path.join('server', 'public')))

module.exports = server
