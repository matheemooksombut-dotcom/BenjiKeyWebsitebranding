import {Route} from "react-router-dom";
import { useState } from 'react'


function HeaderSection() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="headersection-wrapper">
         <div className="headersection-content">
          <br />
          <br />
          <div className="display-flex-img">
            <div className="Content-header">
              <h1>Benji’s Lock & Key</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptatem sunt repudiandae ratione quo iure, laudantium voluptatum repellat alias quod!</p>
              <br />
              <button className="Btn-header-style">GetDetals</button>
            </div>
            <div className="img-box">
              <img src="./public/keyo.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="MostpopularServices">
          <div className="HeaderText-Mostpopular">
            <h1>Most Popular Services</h1>
             <div className="Items-Mostpopular">
            {/* 1 */}
              <div className="items-img-pic">
                  <img src="" alt="" />
              </div>

              {/* 2 */}
               <div className="items-img-pic">
                  <img src="" alt="" />
              </div>

              {/* 3 */}
               <div className="items-img-pic">
                  <img src="" alt="" />
              </div>
          </div>
          </div>

         
      </div>

      
    </>
  )
}

export default HeaderSection
