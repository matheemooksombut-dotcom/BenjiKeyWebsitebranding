import {Link} from "react-router-dom";
import { useState } from 'react'


function Navbar() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav className="navbar">
        <div className="logo">
            <img src="../public/LogoTemplate.jpg" alt="" />
        </div>
        <ul className="menu">
            <Link className="Linkhorver" to="/Residential">
              <li>Residential</li>
            </Link>
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
