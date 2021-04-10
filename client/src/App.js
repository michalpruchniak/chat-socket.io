import React, { useState, useEffect, useRef } from 'react'
import io from 'socket.io-client'

function App() {
  const [yourID, setYourID] = useState();
  const [users, setUsers] = useState([]);
  const [login, setLogin] = useState({id: "", name: "Michał"})
  const inputName = useRef("");
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

  const onCheckName = (e) => {
    e.preventDefault();
    const userObject = {
      id: yourID,
      name: inputName.current.value
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
     <form method="post" onSubmit={onCheckName}>
       <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" ref={inputName}/>
       <button role="submit">Wejdź</button>
     </form>
    </div>
  );
}

export default App;
