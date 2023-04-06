import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Navbar from './paginas/Navbar'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <Navbar/>

    <App />
  </React.StrictMode>,
)
