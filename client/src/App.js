import React, { useState, useEffect, useRef } from 'react'
import io from 'socket.io-client'

import Login from './login/form'
import Chat from './chat'

function App() {
  const [yourID, setYourID] = useState();
  const [users, setUsers] = useState([]);
  const [login, setLogin] = useState({id: "", name: ""})
  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io.connect('/');

    socketRef.current.on("your id", id => {
      setYourID(id)
    })
    socketRef.current.on("all users", users=> {
      setUsers(users);
    })
    socketRef.current.on("new user", user=> {
      setLogin(user);
    })

    console.log(users)
  }, [])

  const LoginToChat = (name) => {
    const userObject = {
      id: yourID,
      name: name
    }
    socketRef.current.emit("my name", userObject)
  }
  if(!login.name){
    return <Login
              LoginToChat={(name) => LoginToChat(name)}
           />
  }
   return <Chat
              users={users}
          />
}

export default App;
