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

    socketRef.current.on("new message", message => {
      setMessages(oldMessages => [...oldMessages, message])
      const chatconversation = document.querySelector(".messages__conversion")
      setTimeout(() => {
        chatconversation.scrollTop = chatconversation.scrollHeight;
      }, 100)
    })

  }, [])

  const LoginToChat = (name) => {
    const userObject = {
      id: yourID,
      name: name
    }
    socketRef.current.emit("my name", userObject)
    setLogin(userObject);

  }

  const SendMessage = (message) => {
    const messageObject = {
      userID: login.id,
      userName: login.name,
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
              yourID={yourID}
              users={users}
              SendMessage={(message) => SendMessage(message)}
              messages={messages}
          />
}

export default App;
