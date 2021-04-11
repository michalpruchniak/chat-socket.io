import Users from './users'
import Messageform from './form'
import Messages from './messages'
const Chat = (props) => {
    return(
        <div>
            <Users
                users={props.users}
            />
            <Messageform
                SendMessage={props.SendMessage}
            />
            <Messages
                messages={props.messages}
            />
        </div>
    )
}
export default Chat;