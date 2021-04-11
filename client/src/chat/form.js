import { useRef } from "react"

const Messageform = (props) => {
    const inputMessage = useRef('');

    const sendMessage = (e) => {
        e.preventDefault();
        props.SendMessage(inputMessage.current.value)
    }

    return(
        <div>
            <form method="post" onSubmit={sendMessage}>
                <input type="text" name="name" id="name" ref={inputMessage} />
                <button role="submit">Send message</button>
            </form>
        </div>
    )
}

export default Messageform