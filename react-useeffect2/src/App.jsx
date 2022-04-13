// import { useState } from 'react'
// import logo from './logo.svg'
import {Todos} from './todo'
import './App.css'
import {useEffect, useState} from 'react'
// import {Counter} from "./components/counter"
function App() {
  const[count, setCounter] = useState(10);

    useEffect(()=>{
        let id = setInterval(()=>{
            setCounter((prevValue)=>{
              if(prevValue <= 0){
                clearInterval(id)
                return 0;
              }
                return prevValue - 1
            })
        },100)

        return()=>{

          clearInterval(id)
        }
        
    },[])
    return (
        <div>
            <h3>count : {count}</h3>
        </div>
    )
}

export default App


 // useEffect(()=>{
  //   async function getData(){
  //     const data = await fetch("http://localhost:5000/users").then((d)=>d.json());
  //     setTodos(data)
  //   }
  // },[])
  // <div>count : {counter}</div>
  //    <button onClick={()=>setCounter(counter+1)}>counter</button>
  //    <div>Age : {age}</div>
  //    <button onClick={()=>setAge(age + 1)}>age</button>
  // const [counter, setCounter] = useState(1);
  // const [age,setAge] = useState(12)

  // useEffect(()=>{
  //   console.log("effect 1")
  // },[counter]);

  // useEffect(()=>{
  //   console.log("effect 2")
  // },[age])