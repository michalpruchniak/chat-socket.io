import React, { useState, useEffect, useRef } from 'react'
import io from 'socket.io-client'

import Login from './login/form'
import Chat from './chat'

function App() {
  const [yourID, setYourID] = useState();
  const [users, setUsers] = useState([]);
  const [login, setLogin] = useState({id: "", name: ""})
  const [messages, setMessages] = useState([])
  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io.connect('/');

    socketRef.current.on("your id", id => {
      setYourID(id)
    })
    socketRef.current.on("all users", users => {
      setUsers(users);
    })
    socketRef.current.on("new user", user => {
      setLogin(user);
    })

    socketRef.current.on("new message", message => {
      setMessages(oldMessages => [...oldMessages, message])
    })

  }, [])

  const LoginToChat = (name) => {
    const userObject = {
      id: yourID,
      name: name
    }
    socketRef.current.emit("my name", userObject)
  }

  const SendMessage = (message) => {
    const messageObject = {
      userID: yourID,
      message: message
    }
    socketRef.current.emit('message', messageObject)

  }
  if(!login.name){
    return <Login
              LoginToChat={(name) => LoginToChat(name)}
           />
  }
   return <Chat
              users={users}
              SendMessage={(message) => SendMessage(message)}
              messages={messages}
          />
}

export default App;
