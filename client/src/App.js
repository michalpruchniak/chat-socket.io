import React, { useState, useEffect, useRef } from 'react'
import io from 'socket.io-client'

import Login from './login/form'

function App() {
  const [yourID, setYourID] = useState();
  const [users, setUsers] = useState([]);
  const [login, setLogin] = useState({id: "", name: "Michał"})
  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io.connect('/');

    socketRef.current.on("your id", id => {
      setYourID(id)
    })
    socketRef.current.on("new user", user=> {
      setUsers(oldUsers => [...oldUsers, user]);
      setLogin(user)
    })


  }, [])

  const LoginToChat = (name) => {
    const userObject = {
      id: yourID,
      name: name
    }
    socketRef.current.emit("my name", userObject)
  }

  return (
    <div className="App">
     {/* {yourID} */}
      Login: {login.name}
      {users.map((number) =>
        <li>{number.name}</li>
      )}
     <ul>

      </ul>
      World
      <Login LoginToChat={(name) => LoginToChat(name) }/>
    </div>
  );
}

export default App;
