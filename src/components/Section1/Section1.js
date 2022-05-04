import React from "react";
import './Section1.css'
import arrow1 from './Arrow1.png'

const Section1 =()=> {
    return(
        <div className=" section1 ">
           <div className="section1-width ">
               <div>
                   <h1>Creating the best <span>ice-cold!</span> experience <br /> 
                        you would never forget.</h1>
               </div>
               <div>
                   <p>Would you explore nature paradise in the world, find the <br />
                    best destination in the world with us</p>
               </div>
               <div className="arrow-width">
                   <h1>View Regions Available</h1>
                   <img src={arrow1}/>
               </div>
           </div>
        </div>
    )
}

export default Section1;