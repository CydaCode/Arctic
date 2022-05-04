import React from "react";
import './Nav.css'
import vector from './Vector.png'




const Nav =()=> {
    return(
        <div className="bg">
            <div className="nav-overlay">
                <nav className="container nav">
                    <div className="nav-width">
                            <div className="header">
                                <div className="img">
                                    <img src={vector}/>
                                </div>
                                <div>
                                    <h1>Arctic Travels</h1>
                                </div>
                            </div>
                            <div className="menu">
                                <ul>
                                    <li>About Us</li>
                                    <li>Support</li>
                                    <li>Language</li>
                                </ul>
                            </div>
                    </div>
                    <div className="btn">
                        <button>Sign In</button>
                    </div>
                </nav>
                <div className="container home-text">
                    <div >
                        <h1>Plan The Perfect Winter Trip</h1>
                        <p>Easily plan your ideal ski trip from home 
                            with the <br /> help of professionals
                        </p>
                    </div>
                    <div className="btn2">
                        <button>Book Here</button>
                    </div>
                </div>
          
            </div>
           
        </div>
    )
}

export default Nav;