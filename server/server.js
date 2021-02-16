const express = require('express')
const path = require('path')

const server = express()
const todosRoutes = require('./routes/todo')

server.use(express.json())
server.use(express.static(path.join('server', 'public')))
server.use('/api/v1/todos', todosRoutes)

module.exports = server
