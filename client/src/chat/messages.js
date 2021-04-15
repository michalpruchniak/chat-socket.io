import { useEffect, useState } from "react"

const Messages = (props) => {
    const [messages, setMessages] = useState([])

    useEffect(() => {
        setMessages(props.messages)
    }, [props.messages])
    return(
        <ul className="messages__conversation">
            {messages.map((msg, index) =>

                <li key={index} className={msg.userID === props.yourID ? 'messages__your' : 'messages__other'}><span className="messages__username">{msg.userName}</span><p>{msg.message}</p></li>
            )}
        </ul>
    )
}

export default Messages