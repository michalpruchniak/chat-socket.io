const express = require("express")
const http = require("http")
const app = express();
const server = http.createServer(app)
const socket = require("socket.io")
const io = socket(server)

io.on("connection", socket => {
    socket.emit("your id", socket.id)

    socket.on("send message", body => {
        io.emit("message", body)
    })

    // socket.on("my name", name => {
    //     socket.on("new user", name)
    // })
    socket.on("my name", users => {
        io.emit("new user", users)
    })
})

server.listen(8000, () => {
    console.log("server is running on port 8000")
})