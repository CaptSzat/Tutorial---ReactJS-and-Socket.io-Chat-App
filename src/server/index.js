const express = require('express')
const app = exress()
var server = require('http').createServer(app)
var io = module.exports.io = require('socket.io')(server)

const PORT = process.env.PORT || 3231

const SocketManager = require('./SocketManager')

app.use(express.static(_dirname + '/../../build'))
io.on('connection', SocketManager)

server.listen(PORT, ()=>{
	console.log("Connected to port:" + PORT);
})