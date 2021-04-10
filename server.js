const express = require("express")
const http = require("http")
const app = express();
const server = http.createServer(app)
const socket = require("socket.io")
const io = socket(server)


let clients = [];

io.on("connection", socket => {
    socket.emit("your id", socket.id)

    socket.on("send message", body => {
        io.emit("message", body)
    })


    socket.on("my name", users => {
        io.emit("new user", users)
        clients.push(users)
        io.emit("all users", clients)
        console.log(clients)

    })

    socket.on('disconnect', function () {
        clients.splice(clients.indexOf(socket), 1);
        io.emit("all users", clients)
        console.log(clients)
    });

})

server.listen(8000, () => {
    console.log("server is running on port 8000")
})