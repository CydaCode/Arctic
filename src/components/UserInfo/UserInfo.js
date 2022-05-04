import React from "react";
import user from './user.png'
import vector2 from './Vector2.png'
import vectorplane from './Vectorplane.png'
import map from './map-pin.png'
import card from './card.png'
import intrax from './intrax.png'
import nike from './nike.png'
import pay from './pay.png'
import star from './star.png'
import calendar from './calendar.png'
import './UserInfo.css'

const UserInfo =()=> {
    return(
        <div>
                <div className=" userinfo">
                    <div className="userinfo-width container">
                    <div className="lh pa">
                        <div className="flex ">
                            <div className="marg-icon">
                                <img src={map}/>
                            </div>
                            <div className="p-text">
                                <p>LOCATION</p>
                            </div>
                        </div>
                        <div className="flex">
                            <h3>Iceland</h3>
                            <div className="marg-r">
                                <img src={vector2}/>
                            </div>
                        </div>
                    </div>
                    <div className="lh">
                        <div className="flex">
                            <div className="marg-icon">
                                <img src={user}/>
                            </div>
                            <div className="p-text">
                                <p>PERSON</p>
                            </div>
                        </div>
                        <div className="flex">
                            <h3>4 Persons</h3>
                            <div className="marg-r">
                                <img src={vector2}/>
                            </div>
                        </div>
                    </div>
                    <div className="lh">
                        <div className="flex">
                            <div className="marg-icon">
                                <img src={calendar}/>
                            </div>
                            <div className="p-text">
                                <p>CHECK IN</p>
                            </div>
                        </div>
                        <div className="flex">
                            <h3>12 January 2022</h3>
                            <div className="marg-r">
                                <img src={vector2}/>
                            </div>
                        </div>
                    </div>
                    <div className=" lh">
                        <div className="flex ">
                            <div className="marg-icon">
                                <img src={calendar}/>
                            </div>
                            <div className="p-text">
                                <p>CHECK OUT</p>
                            </div>
                        </div>
                        <div className="flex">
                            <h3>18 January 2022</h3>
                            <div className="marg-r">
                                <img src={vector2}/>
                            </div>
                        </div>
                    </div>
                    <div className="btn3 margT">
                            <button>Book Trip</button>
                            <div className="trip-plane">
                                <img src={vectorplane}/>
                            </div>
                    </div>
                </div>
            </div>

            <div className="logo">
                    <div className="logo-width">
                        <div> 
                            <img src={nike}/>
                        </div>
                        <div> 
                            <img src={pay}/>
                        </div>
                        <div> 
                            <img src={star}/>
                        </div>
                        <div> 
                            <img src={intrax}/>
                        </div>
                        <div> 
                            <img src={card}/>
                        </div>
                    </div>
                </div>
        </div>
    )
}


export default UserInfo;