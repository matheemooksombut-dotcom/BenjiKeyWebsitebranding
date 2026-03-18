
import { useState } from 'react'
import Navbar from './components/navbar.jsx'
import HeaderSection from './components/headersection.jsx'
import Contentsectionhome from './components/contentsectionhome.jsx'
import Footer from './components/footer.jsx'
import FounderfooterCompounent from "./components/FounderfooterCompounent.jsx";
import './App.css'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <HeaderSection/>
      <Contentsectionhome/>
      <FounderfooterCompounent/>
      <div id='contact'>
        <Footer/>
      </div>

      
    </>
  )
}

export default Home
