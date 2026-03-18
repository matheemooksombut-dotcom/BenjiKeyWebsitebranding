
import { useState } from 'react'



function ResidentialCompounent() {
  const [count, setCount] = useState(0)

  return (
    <>
     
    <div className="bg-header-Residential">
        <div className="Flex-Residential-compount">
            <div className="content-Residential">
                <h2>Residential</h2>
                <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolore perferendis odio excepturi eius magni libero ex iusto corrupti dicta!</p>
            </div>

            <div className="Pictureof-Residential">
                <img src="./public/Residential.png" alt="" />
            </div>
        </div>
    </div>

    <div className='Content-Bg-Residential'>
        <div className="Content-Residentials-Headging">
                <h2>Residential LockSmith Services</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, sequi.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio facere cumque debitis.
                </p>
        </div>
        <div className='In-ContentResidential'>
            
             <div className="Content-Residentials-concept">
                <ul className='InListStyleCompounent'>
                    <li>Lost House Keys</li>
                   
                    <div className='underline'></div>
                    <br />
                    <li>House Lockout</li>
                    <div className='underline'></div>
                    <br />
                    <li>Change Lockout</li>
                    <div className='underline'></div>
                    <br />
                    <li>Lock Repair</li>
                    <div className='underline'></div>
                    <br />
                    <li>Rekey</li>
                    <div className='underline'></div>
                    <br />
                    <li>New Lock installation</li>
                   
                    <div className='underline'></div>
                    <br />
                    <li>Safe Services</li>
                     <div className='underline'></div>
                </ul>
            </div>
              <div className="Content-Residentials-concept">
                <ul className='InListStyleCompounent'>
                    <li>Storage Lockout</li>
                   
                    <div className='underline'></div>
                    <br />
                    <li>Entry Door Locks</li>
                    <div className='underline'></div>
                    <br />
                    <li>Mailbox Locks</li>
                    <div className='underline'></div>
                    <br />
                    <li>Windown Locks</li>
                    <div className='underline'></div>
                    <br />
                    <li>Garage Door Locks</li>
                    <div className='underline'></div>
                    <br />
                    <li>Gate Locks</li>
                   
                    <div className='underline'></div>
                    <br />
                    
                     
                </ul>
            </div>



             <div className="Content-Residentials-concept">
                <ul className='InListStyleCompounent'>
                    <li>CCTV</li>
                   
                    <div className='underline'></div>
                    <br />
                    <li>Buiding Security</li>
                    <div className='underline'></div>
                    <br />
                    <li>Key Duplication</li>
                    <div className='underline'></div>
                    <br />
                    <li>Home Security System Services</li>
                    <div className='underline'></div>
                    <br />
                    <li>Digital Door Locks</li>
                    <div className='underline'></div>
                    <br />
                    <li>Broken Key Extraction</li>
                   
                    <div className='underline'></div>
                    <br />
                    <li>Safe Services</li>
                     <div className='underline'></div>
                </ul>
            </div>
        </div>

    </div>
    

      
    </>
  )
}

export default ResidentialCompounent
