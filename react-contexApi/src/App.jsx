import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Navbar}  from "./components/navbar"
import {Card} from "./components/Body/Card"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar></Navbar>
      <Card></Card>
    </div>
  )
}

export default App
