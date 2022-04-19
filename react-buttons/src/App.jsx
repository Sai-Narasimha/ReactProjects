import { useState } from 'react'
import logo from './logo.svg'
// import Button from "antd"
// import './App.css'
import {Button} from './Components/Button.jsx'
function App() {
  const [theme, setTheme] = useState("light")

  return (
    <div className="App">
      {/* <h2>Theme : {theme}</h2> */}
      <Button type = "primary">Primary Button</Button>
      <Button type = "dashed">Dashed Button</Button>
      <Button type = "text">Text Button</Button>
      <Button type = "link">Link Button</Button>
    </div>
  )
}

export default App
