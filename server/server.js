const path = require('path')
const express = require('express')

const taskRoutes = require('./routes/tasks')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/tasks', taskRoutes)

module.exports = server
