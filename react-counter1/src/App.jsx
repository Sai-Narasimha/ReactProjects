import { useState } from 'react'
import logo from './logo.svg'
import {Counter} from "./components/counter"
import './App.css'

function App() {
 

  return (
    <div className="App">
    <Counter/>
      {/* <h3 className={{count}%2==0 ? "red":"green"}>Counter : {count}</h3> */}
    </div>
  )
}

export default App
