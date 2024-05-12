import { useEffect, useState } from "react";

export default function Users(){
    const [user, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, []);

    return(
        <div>
            <h3>User: {user.length}</h3>
        </div>
    )
}