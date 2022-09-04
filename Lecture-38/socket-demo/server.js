const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const server = http.createServer(app); //creating a http server and passing express as request handler
const { Server } = require('socket.io');
const io = new Server(server);


app.use('/',express.static(path.join(__dirname, 'public')));

const users = {};


io.on('connection', (socket) => {
    console.log(`Client with ${socket.id} client id connected with server`);

    socket.on('login', (data) => {
        const username = data.username;
        users[socket.id] = username;
    })


    socket.on('send-msg', (data) => {
        console.log(data);
        io.emit('received-msg', {
            message: data.message,
            username: users[socket.id],
        })
    });

    socket.on('typing', () => {
        socket.broadcast.emit('some-one-typing', {
            username: users[socket.id]
        })
    })

    socket.on('typing-stopped', () => {
        socket.broadcast.emit('typing-stopped-event');
    })


    socket.on('disconnect', () => {
        console.log(`client with ${socket.id} disconnected`);
    });
});



server.listen(3000, () => {
    console.log('Communication Server started at port 3000');
});