const express = require("express")
const http = require("http")
const app = express();
const server = http.createServer(app)
const socket = require("socket.io")
const io = socket(server)


let clients = [];

io.on("connection", socket => {
    socket.emit("your id", socket.id)

    socket.on("message", message => {
        io.emit("new message", message)

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