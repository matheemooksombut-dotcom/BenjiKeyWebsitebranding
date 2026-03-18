
import { useState } from 'react'



function CommercialCompounent() {
  const [count, setCount] = useState(0)

  return (
    <>
     
    <div className="bg-header-Residential">
        <div className="Flex-Residential-compount">
            <div className="content-Residential">
                <h2>Commercial</h2>
                <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolore perferendis odio excepturi eius magni libero ex iusto corrupti dicta!</p>
            </div>

            <div className="Pictureof-Residential">
                <img src="./public/CompuotImgCommercial.png" alt="" />
            </div>
        </div>
    </div>

    <div className='Content-Bg-Residential'>
        <div className="Content-Residentials-Headging">
                <h2>Commercial LockSmith Services</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, sequi.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio facere cumque debitis.
                </p>
        </div>
        <div className='In-ContentResidential'>
            
             <div className="Content-Residentials-concept">
                <ul className='InListStyleCompounent'>
                    <li>Master Systems</li>
                   
                    <div className='underline'></div>
                    <br />
                    <li>High Security Locks</li>
                    <div className='underline'></div>
                    <br />
                    <li>Door Closer</li>
                    <div className='underline'></div>
                    <br />
                    <li>Access Control Systems</li>
                    <div className='underline'></div>
                    <br />
                    <li>Lever Handles</li>
                    <div className='underline'></div>
                    <br />
                    <li>File Cabinet</li>
                   
                    <div className='underline'></div>
                    <br />
                    <li>Interchangeable Core Lock</li>
                     <div className='underline'></div>
                </ul>
            </div>
              <div className="Content-Residentials-concept">
                <ul className='InListStyleCompounent'>
                    <li>Mailbox</li>
                   
                    <div className='underline'></div>
                    <br />
                    <li>Fresh Lock Installation</li>
                    <div className='underline'></div>
                    <br />
                    <li>Lost Office Keys</li>
                    <div className='underline'></div>
                    <br />
                    <li>Lock Change</li>
                    <div className='underline'></div>
                    <br />
                    <li>Repair Locks</li>
                    <div className='underline'></div>
                    <br />
                    <li>CCTV</li>
                   
                    <div className='underline'></div>
                    <br />
                    
                     
                </ul>
            </div>



             <div className="Content-Residentials-concept">
                <ul className='InListStyleCompounent'>
                    <li>Push Bars</li>
                   
                    <div className='underline'></div>
                    <br />
                    <li>Exit Devices</li>
                    <div className='underline'></div>
                    <br />
                    <li>Desk Locks</li>
                    <div className='underline'></div>
                    <br />
                    <li>Intercom and Buzzer Systems</li>
                    <div className='underline'></div>
                    <br />
                    <li>Building Security</li>
                    <div className='underline'></div>
                    <br />
                    <li>Digital Door Locks</li>
                   
                    <div className='underline'></div>
                    <br />
                   
                </ul>
            </div>
        </div>

    </div>
    

      
    </>
  )
}

export default CommercialCompounent
