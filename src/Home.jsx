import {Route} from "react-router-dom";
import { useState } from 'react'
import Navbar from './components/navbar.jsx'
import HeaderSection from './components/headersection.jsx'
import './App.css'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <HeaderSection/>

      
    </>
  )
}

export default Home
