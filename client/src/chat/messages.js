import { useEffect, useState } from "react"

const Messages = (props) => {
    const [messages, setMessages] = useState([])

    useEffect(() => {
        setMessages(props.messages)
    })

    return(
        <ul>
            {messages.map((msg) =>
                <li>{msg.message}</li>
            )}
        </ul>
    )
}

export default Messages