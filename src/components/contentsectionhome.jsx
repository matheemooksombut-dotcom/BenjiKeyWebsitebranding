
import { useState } from 'react'


function Contentsectionhome() {
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
         <div className='text-header-content'>
                <h2>OUR AREAS OF EXPERTISE</h2>
                <br />
                <br />

                <div className="showcase-items-content">
                    <div className="showcase-content-img">
                        <img src="./public/sectionhome-2.png" alt="" />
                        <p>Residential</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia possimus molestias, amet tempora sint sit!</p>
                    </div>
                    <div className="showcase-content-img">
                        <img src="./public/sectionhome-3.png" alt="" />
                        <p>Commercial</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur fugit qui quidem possimus consectetur rerum!</p>
                    </div>
                    <div className="showcase-content-img">
                        <img src="./public/sectionhome-4.png" alt="" />
                        <p>Automotive</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque ea, corrupti porro blanditiis beatae quas!</p>
                    </div>
                </div>
        </div>

        
      
    </>
  )
}

export default Contentsectionhome
