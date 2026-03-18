
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

    <div className='Content-Bg-Residential'></div>
    

      
    </>
  )
}

export default ResidentialCompounent
