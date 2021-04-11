import Users from './users'
import Messageform from './form'
const Chat = (props) => {
    return(
        <div>
            <Users
                users={props.users}
            />
            <Messageform SendMessage={props.SendMessage} />
        </div>
    )
}
export default Chat;