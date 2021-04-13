import { useRef } from "react"

const Messageform = (props) => {
    const inputMessage = useRef('');
    const chatmessages = document.querySelector(".messages__list")

    const sendMessage = (e) => {
        e.preventDefault();
        props.SendMessage(inputMessage.current.value)
        e.target.elements.msg.value = ''
        e.target.elements.msg.focus()

        setTimeout(() => {
            chatmessages.scrollTop = chatmessages.scrollHeight;

        }, 100)
    }

    return(
        <div>
            <form method="post" onSubmit={sendMessage}>
                <input type="text" name="msg" ref={inputMessage} />
                <button role="submit">Send message</button>
            </form>
        </div>
    )
}

export default Messageform