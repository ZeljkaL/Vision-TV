import React from 'react'
import Nav from './Nav'
import AutoPlay from './Slider'
const Hero=()=>{
    return(
        <>
          <div className="App">
               <div className='app-over'>
    
                  <Nav/>
                  <AutoPlay/>
              </div>
           </div>
        </>
    )
}

export default Hero