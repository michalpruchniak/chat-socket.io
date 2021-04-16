import { useRef } from "react";

const Form = (props) => {
    const inputName = useRef("");
    const onCheckName = (e) => {
        e.preventDefault();
        props.LoginToChat(inputName.current.value)
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
                 />
                <button role="submit">Enter</button>
            </form>
        </div>
    );
}
export default Form