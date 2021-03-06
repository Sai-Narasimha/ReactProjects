import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {CartContextProvider} from "./Contexts/cartContext"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartContextProvider>
      <App />

    </CartContextProvider>
  </React.StrictMode>
)
