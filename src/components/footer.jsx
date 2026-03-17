
import { useState } from 'react'


function Footer() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="footer-wrapper">
            <div className="footer-content">
              <center><h2>TESTIMONIALS</h2></center>
            </div>

            <div className='footer-flex-content'>
              <div className="foot-insdie">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam tenetur nobis saepe quae reiciendis explicabo quibusdam non earum necessitatibus porro.</p>
                <br />
                <b><p>BETTY DOWNEY</p></b>
              </div>

              <div className="foot-insdie">
                 <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam tenetur nobis saepe quae reiciendis explicabo quibusdam non earum necessitatibus porro.</p>
                 <br />
                 <b><p>JAMES T. O'REILLY</p></b>
              </div>

              <div className="foot-insdie">
                 <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam tenetur nobis saepe quae reiciendis explicabo quibusdam non earum necessitatibus porro.</p>
                 <br />
                 <b><p>TOM & MANDY LEVIS</p></b>
              </div>
            </div>

        </div>

        <div className="incontent-footer">
              <div className='main-block-contentfooter'>
                <div className="block-footer-list">

                  <div className='Inconcept-footer'>
                    <div className='Inconcept-img'>
                      <img src="./public/LogoTemplate.jpg" alt="" />

                    </div>
                    <span>Benji's Lock & Key</span>
                  </div>

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
                  </ul>


                  <ul className='list-footer'>
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
