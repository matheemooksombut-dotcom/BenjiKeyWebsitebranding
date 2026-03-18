
import { useState } from 'react'
function Footer() {

  const [count, setCount] = useState(0)

  return (
    <>
    

        <div className="incontent-footer">
              <div className='main-block-contentfooter'>
                
                 <iframe className='map-box'
                    src="https://www.google.com/maps?q=13.736717,100.523186&z=15&output=embed"
                    width="40%"
                    height="300"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>

                <div className="block-footer-list">

                  <ul className='list-footer'>
                    <li>Residential</li>
                    <br />
                    <li>Commercial</li>
                    <br />
                    <li>Automotive</li>
                    <br />
                    <li>About Us</li>
                    <br />
                    <li>Contact</li>
                  </ul>


                  <ul className='list-footer'>
                    <li>Acessibility Statment</li>
                    <br />
                    <li>Privacy Policy</li>
                    <br />
                    <li>Terms & Conditions</li>
      
                  </ul>


                  <ul className='list-footer'>
                    <li>Email</li>
                    <br />
                    <li>Info@mysite.com</li>
                    <br />
                    <div className='underline'></div>
                    <br />
                    <li>Phone</li>
                    <br />
                    <li>123-456-7890</li>
                  </ul>

                </div>
                
              </div>
        </div>

        

              
    </>
  )
}

export default Footer
