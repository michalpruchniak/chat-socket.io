import Users from './users'
import Messageform from './form'
import Messages from './messages'
const Chat = (props) => {
    return(
        <div>
            <div className="messages__list">
                <Users
                    users={props.users}
                    yourID={props.yourID}

                />
                <Messages
                    messages={props.messages}
                    yourID={props.yourID}
                />
            </div>
            <div className="messages__form">
                <Messageform
                    SendMessage={props.SendMessage}
                />
            </div>
        </div>
    )
}
export default Chat;