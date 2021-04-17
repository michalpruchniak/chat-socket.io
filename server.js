const express = require("express")
const http = require("http")
const app = express();
const server = http.createServer(app)
const socket = require("socket.io")
const io = socket(server)

const { userJoin, getCurrentUser, getUsers } = require('./client/src/include/users')


let clients = [];

io.on("connection", socket => {
    socket.emit("your id", socket.id)

    socket.on('joinRoom', ({name, room}) => {
        const user = userJoin(socket.id, name, room)
        socket.join(user.room)
    })
    socket.on("message", message => {
        const user = getCurrentUser(socket.id)
        console.log(user)
        io.to(user.room)
          .emit("new message", message)

    })


    socket.on("my name", users => {
        clients.push(users)
        io.emit("all users", clients)

    })

    socket.on('disconnect', function () {
        clients.splice(clients.indexOf(socket), 1);
        io.emit("all users", clients)
    });

})

server.listen(8000, () => {
    console.log("server is running on port 8000")
})