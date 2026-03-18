
import { useState } from 'react'


function ContentResidentComponent() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className="Contenthome-wrapper">
            <div className="Contenthome">
                <div className="content-1">
                    <h2>Serving Clients in San Francisco and the Bay Area</h2>
                    <div className="underline"></div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur fugiat ipsam quibusdam, nam dignissimos corrupti optio sint iure? Voluptate, repellendus!</p>
                    <br />
                    <button className='btn-content-home'>Get Details</button>
                </div>

                <div className="content-2">
                   <img src="./public/sectionhome-1.png" alt="" />
                </div>

            </div>
           
        </div>
      


        
      
    </>
  )
}

export default ContentResidentComponent
