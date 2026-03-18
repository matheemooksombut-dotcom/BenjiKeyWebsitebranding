
import { useState } from 'react';
import Navbar from './components/navbar.jsx';
import Footer from './components/footer.jsx';
import CommercialCompounent from './components/CommercialCompounent.jsx';
import ContentReciptentComponent from './components/contentReciptionCompounent.jsx';

import './App.css'

function Commercial() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Navbar/>
        <CommercialCompounent/>
        <ContentReciptentComponent/>
        <Footer/>
        

      
    </>
  )
}

export default Commercial
