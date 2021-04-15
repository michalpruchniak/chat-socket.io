import { useEffect, useState } from "react";

const Users = (props) => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        setUsers(props.users)
    }, [props.users])
    return(
        <ul>
            {users.map((user) =>
                <li key={user.id}>{user.name}</li>
            )}
        </ul>
    );
}

export default Users