// import { useState } from 'react'
// import logo from './logo.svg'
import {Todos} from './todo'
import './App.css'
import {useEffect, useState} from 'react'
function App() {
  // const [todos, setTodos] = useState([]);
  

 
  
  
  return (
    <div className="App">
      <Todos/>
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