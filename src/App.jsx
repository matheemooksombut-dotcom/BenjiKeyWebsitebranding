import {Route} from "react-router-dom";
import { useState } from 'react'

import './App.css'
import Home from './Home.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home  Route="./"/>
      
    </>
  )
}

export default App
