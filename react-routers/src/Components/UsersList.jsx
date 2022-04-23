import {useState, useEffect} from 'react'
import axios from "axios"
import {Link} from "react-router-dom"
export const UsersList = () =>{
    //"https://reqres.in/api/users"
    const [users, setUsers] = useState([])

    useEffect(()=>{
        axios.get("https://reqres.in/api/users").then(({data})=>{
            setUsers(data.data)
        })
    },[]);

    return (
        <div>
            {users.map((user)=>(
                <p Key= {user.id}>
                    <Link to = {`/users/${user.id}`}>{user.id}.{user.first_name}</Link> 
                </p>
            ))}
        </div>
    )
}