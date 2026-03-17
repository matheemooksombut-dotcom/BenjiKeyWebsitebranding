
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
                  <ul className='list-footer'>
                    <li>Residential</li>
                    <li>Commercial</li>
                    <li>Automotive</li>
                    <li>About Us</li>
                    <li>Contact</li>
                  </ul>
                </div>
                
              </div>
        </div>

        

              
    </>
  )
}

export default Footer
