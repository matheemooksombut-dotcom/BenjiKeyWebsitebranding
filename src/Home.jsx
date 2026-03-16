import {Route} from "react-router-dom";
import { useState } from 'react'
import Navbar from './components/navbar.jsx'
import './App.css'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>

      
    </>
  )
}

export default Home
