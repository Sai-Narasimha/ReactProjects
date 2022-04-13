import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Button} from './components/button'

function App() {
  const logo = "LOGOBAKERY";
  const links = ["Services", "Projects", "About"];


  return (
    <div className="App">
      <h2>{logo}</h2>
      <div className = "linkList">{links.map(ele=><h3>{ele}</h3>)}</div>
      <Button/>
    </div>
  )
}

export default App
