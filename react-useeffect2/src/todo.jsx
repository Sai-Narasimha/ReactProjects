import {userState, useEffect, useReducer} from "react"
export function Todos(){
    const [todo,setTodo] = userState([])

    useEffect(() =>{
        getData()
    },[])

    const getData = async ()=>{
        const data = await fetch("http://localhost:5000/users").then((d)=>d.json());
        setTodo(data)
    };
    return (
        <div>
            <input onChange = {(e) => setText(e.target.value)}type = "text" placeholder = "Enter todo" />
            <button onClick = {()=>{
                const payload = {
                    title : text,
                    status : false
                };
                fetch("http://localhost:5000/users", { 
                    method : "POST",
                    headers:{
                        "content-type": "application/json"
                    },
                    body : JSON.stringify(payload)
                });

            }}>Add todo </button>
        </div>
    )
}