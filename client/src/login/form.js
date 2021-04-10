import { useRef } from "react";

const Form = (props) => {
    const inputName = useRef("");
    const onCheckName = (e) => {
        e.preventDefault();
        props.LoginToChat(inputName.current.value)
        // const userObject = {
        //     id: yourID,
        //     name: inputName.current.value
        // }
        // socketRef.current.emit("my name", userObject)
    }
    return(
        <div>
            <form method="post" onSubmit={onCheckName}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" ref={inputName} />
                <button role="submit">Wejdź</button>
            </form>
        </div>
    );
}
export default Form