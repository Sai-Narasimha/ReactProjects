import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Form} from "./components/form.jsx"
const [counter,setCounter] = useState(10);
const ref = useState(10)

function App() {
  const [counter, setCounter] = useState(0);
  const conterRef = useRef(null);
  
  
  return (
    <div className="App">
     <h3>counter : {counter}</h3>

     <button onClick={()=>{
        clearInterval(counterRef.current)
     }}>
       Pause
     </button>
     <button 
     onClick={()=>{

     }}>
       start
       </button>
       <button onClick={()=>{
         clearInterval(counterRef.current)
       }}>

       </button>
    </div>
  )
}

export default App
