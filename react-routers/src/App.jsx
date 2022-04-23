import { useState } from 'react'
import {Routes, Route} from "react-router-dom"
import {About} from "./Components/About"
import {Home} from "./Components/Home"
import {Navbar} from "./Components/Navbar"
import {UsersList} from "./Components/UsersList"
import {UserDetails} from "./Components/UserDetails"
import './App.css'

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path = "/home" element = {<Home></Home>}></Route>
        <Route path = "/about" element = {<About></About>}></Route>
        <Route path = "/users" element = {<UsersList></UsersList>}></Route>
        <Route path = "/users/:id" element = {<UserDetails></UserDetails>}></Route>
      </Routes>
    </div>
  )
}

export default App
