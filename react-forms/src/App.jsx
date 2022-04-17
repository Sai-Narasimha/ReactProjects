import { useState } from 'react'
import {Form} from "./components/form"
import {Users} from "./components/user"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Form/>
      <Users/>
    </div>
  )
}

export default App
