import { Routes, Route } from "react-router-dom";
import { useState } from 'react'
import './App.css'
import Home from './Home.jsx'
import Residential from './Residential.jsx'
import Commercial from './Commercial.jsx'



function App() {
  const [count, setCount] = useState(0)

  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Residential" element={<Residential />} />
        <Route path="/Commercial" element={<Commercial />} />

      </Routes>
      
    
  )
}

export default App
