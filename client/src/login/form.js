import { useRef } from "react";

const Form = (props) => {
    const inputName = useRef("");
    const inputRoom = useRef("");
    const onCheckName = (e) => {
        e.preventDefault();
        props.LoginToChat(inputName.current.value, inputRoom.current.value)
    }
    return(
        <div className="login">
            <h2>Login to the chat</h2>
            <form method="post" onSubmit={onCheckName}>
                <input type="text"
                       name="name"
                       id="name"
                       ref={inputName}
                       placeholder="Enter your name"
                       required
                 />
                <select
                        name="room"
                        ref={inputRoom}
                        required
                >
                    <option value="React">React</option>
                    <option value="Socket.io">Socket.io</option>
                    <option value="PHP">PHP</option>
                </select>
                <button role="submit">Enter</button>
            </form>
        </div>
    );
}
export default Form