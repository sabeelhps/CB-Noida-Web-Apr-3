const express = require('express');
const app = express();
// Getting http module
const http = require('http');
// Creating a http server and passing express as request handler
const server = http.createServer(app);
const path = require('path');
const socketio = require('socket.io');
const io = socketio(server);


app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/user', (req, res) => {
    console.log(`hey there, i am in latest branch`)
    res.send("Hello from User!!!###");
});


const users = {};


io.on('connection', (socket) => {
    console.log(`Someone got connected with the id - ${socket.id}`);

    socket.on('send-msg', (data) => {
        io.emit('received-msg', {
            msg: data.msg,
            username: users[socket.id]
        })
    });

    socket.on('login', (data) => {
        
       
        socket.emit('all-clients', {
            clients: JSON.stringify(users)
        });

        users[socket.id] = data.username;

        socket.broadcast.emit('new-client', {
            clients: JSON.stringify(users)
        })
    })
    socket.on('disconnect', () => {
        delete users[socket.id];
    })
    
});





const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`server started at port ${port}`);
})












