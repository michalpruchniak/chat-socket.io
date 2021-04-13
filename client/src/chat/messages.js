import { useEffect, useState } from "react"

const Messages = (props) => {
    const [messages, setMessages] = useState([])

    useEffect(() => {
        setMessages(props.messages)
    })
    return(
        <ul className="messages__conversation">
            {messages.map((msg, index) =>

                <li key={index} className={msg.userID===props.yourID ? 'messages__your' : 'messages__other'}>{msg.userName}<p>{msg.message}</p></li>
            )}
        </ul>
    )
}

export default Messages