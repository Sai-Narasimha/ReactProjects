
import {useState,useEffect} from "react"
import axios from 'axios';
import {useParams} from 'react-router-dom'
export const UserDetails = ()=>{
    const {id} = useParams();
    const [user,setUser] = useState({})
    useEffect(()=>{
    axios.get(`https://reqres.in/api/users/${id}`).then(({data})=>{
        
        setUser(data.data)
    })

    },{})
    return <div>
        <img src = {user.avatar}/>
        <div>First Name : {user.first_name}</div>
        <div>Last Name : {user.last_name}</div>
        
        </div>
}