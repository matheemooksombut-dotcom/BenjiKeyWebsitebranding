
import { useState } from 'react'


function Navbar() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav className="navbar">
        <div className="logo">
            <img src="" alt="" />
        </div>
        <ul className="menu">
            <li>Residential</li>
            <li>Comemercial</li>
            <li>Automotive</li>
            <li>About Us</li>
            <li>Contact Us</li>
        </ul>
      </nav>

      
    </>
  )
}

export default Navbar
