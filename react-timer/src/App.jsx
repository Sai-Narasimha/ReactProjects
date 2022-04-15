import { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import {Timer} from "./components/timer.jsx"
function App() {
  const [beginerTime, setBeginerTime] = useState(false);
  const [timings, setTimings] = useState({
    start:0,
    stop : 0
  }) 
const updateTimer= (e)=>{
  setTimings({
    ...timings,
    [e.target.name] : [e.target.value]
  })
}
 
  return (
    <div className="App">
      <label>start</label>
      <input type = "number" name = "start" onChange = {(e)=>{updateTimer(e)}}/>
      <label>stop</label>
      <input type = "number" name = "stop" onChange = {(e)=>{updateTimer(e)}}/>

      <button onClick = {()=>{setBeginerTime(!beginerTime)}}>Begin</button>

      {beginerTime ? <Timer {...timings}/> : null}
    </div>
  )
}

export default App
