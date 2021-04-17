import { useRef } from "react"

const Messageform = (props) => {
    const inputMessage = useRef('');

    const sendMessage = (e) => {
        const chatMessages = document.querySelector(".messages__conversion")
        e.preventDefault();
        props.SendMessage(inputMessage.current.value)
        e.target.elements.msg.value = ''
        e.target.elements.msg.focus()

        setTimeout(() => {
            chatMessages.scrollTop = chatMessages.scrollHeight;

        }, 100)
    }

    return(
        <div>
            <form method="post" onSubmit={sendMessage}>
                <input type="text" name="msg" ref={inputMessage} required />
                <button role="submit">Send message</button>
            </form>
        </div>
    )
}

export default Messageform