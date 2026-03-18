import {Route} from "react-router-dom";
import { useState } from 'react'
import Navbar from './components/navbar.jsx'
import Footer from './components/footer.jsx'
import ResidentialCompounent from "./components/ResidentialCompounent.jsx";
import ContentReciptentComponent from './components/contentReciptionCompounent.jsx';


import './App.css'

function Residential() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <ResidentialCompounent/>
      <ContentReciptentComponent/>
      
      <div id="contact">
        <Footer/>
      </div>

      
    </>
  )
}

export default Residential
