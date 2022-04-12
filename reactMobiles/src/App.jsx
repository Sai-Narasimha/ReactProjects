import { useState } from 'react'
import {Heading} from "./components/heading"
import logo from './logo.svg'
import './App.css'

function App() {
  const data = [
    {
        heading : "Mobile Operating System",
        items : ["Anroid","BlackBerry", "iPhone","Windows Phone"]
    },
    {
        heading : "Mobile Manufacturers",
        items : ["Samsung","HTC","Micromax","Apple"]
    }
];

  return (
    <div className="App">
      <div>
        {data.map(ele=>
        <div>
          <h2 className = "heading">{ele.heading}</h2>
          <ul>
            {ele.items.map(i=> <li className="listStyle">{i}</li>)};
          </ul>
        </div>
        )};
       
      </div>
    </div>
  )
}

export default App
