import { useState } from 'react'
import {Routes, Route} from "react-router-dom"
import {Navbar} from "./Components/Navbar"
import {Home} from "./Components/Home"
import {MensPage} from "./Components/MensPage"
import {WomensPage} from "./Components/WomensPage"
import {Footer} from "./Components/Footer"
import logo from './logo.svg'
import './App.css'

function App() {
  

  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path = "/" element = {<Home/>}></Route>
        <Route path = "/menspage" element = {<MensPage/>}></Route>
        <Route path = "/womenspage" element = {<WomensPage/>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
