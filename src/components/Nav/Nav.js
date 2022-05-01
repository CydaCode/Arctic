import React from "react";
import './Nav.css'
import vector from './Vector.png'
import user from './user.png'
import vector2 from './Vector2.png'
import map from './map-pin.png'
import calendar from './calendar.png'



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

                <div className=" userinfo">
                    <div className="userinfo-width container">
                    <div>
                        <div className="flex">
                            <img src={map}/>
                            <div>
                                <p>LOCATION</p>
                            </div>
                        </div>
                        <div className="flex">
                            <h3>Iceland</h3>
                            <div>
                                <img src={vector2}/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex">
                            <img src={user}/>
                            <div>
                                <p>PERSON</p>
                            </div>
                        </div>
                        <div className="flex">
                            <h3>4 Persons</h3>
                            <div>
                                <img src={vector2}/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex">
                            <img src={calendar}/>
                            <div>
                                <p>CHECK IN</p>
                            </div>
                        </div>
                        <div className="flex">
                            <h3>12 January 2022</h3>
                            <div>
                                <img src={vector2}/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex">
                            <img src={calendar}/>
                            <div>
                                <p>CHECK OUT</p>
                            </div>
                        </div>
                        <div className="flex">
                            <h3>18 January 2022</h3>
                            <div>
                                <img src={vector2}/>
                            </div>
                        </div>
                    </div>
                    <div className="btn3">
                        <button>Book Trip</button>
                    </div>

                </div>
                </div>
          
            </div>
           
        </div>
    )
}

export default Nav;