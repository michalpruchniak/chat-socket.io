const express = require("express")
const http = require("http")
const app = express();
const server = http.createServer(app)
const socket = require("socket.io")
const io = socket(server)

const {
        userJoin,
        getCurrentUser,
        getUsers,
        removeUser
    } = require('./client/src/include/users')


io.on("connection", socket => {
    socket.emit("your id", socket.id)

    socket.on('joinRoom', ({name, room}) => {
        const user = userJoin(socket.id, name, room)
        socket.join(user.room)
        io.emit("all users", getUsers())


    })
    socket.on("message", message => {
        const user = getCurrentUser(socket.id)

        io.to(user.room)
          .emit("new message", message)

    })

    socket.on('disconnect', function () {
        removeUser(getUsers().indexOf(socket), 1)
        io.emit("all users", getUsers())
    });

})

server.listen(8000, () => {
    console.log("server is running on port 8000")
})