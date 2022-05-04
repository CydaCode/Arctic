import React from "react";
import './Footer.css';
import im1 from './im1.png'
import facebook from './facebook.png';
import instagram from './instagram.png';
import twitter from './twitter.png'


const Footer =()=> {
    return(
        <div className="footer">
            <div className="footer-width container">
                <div>
                    <div className="footer-image">
                        <img src={im1}/>
                    </div>
                    <div className="arctic-text">
                        <h2>Arctic Travels</h2>
                        <p>Book your trip in minutes, get full <br />
                            control for much longer</p>
                    </div>
                    <div className="social">
                        <div className="facebook">
                            <img src={facebook}/>
                        </div>
                        <div className="instagram">
                            <img src={instagram}/>
                        </div>
                        <div className="twitter">
                            <img src={twitter}/>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="contact">
                        <div className="width">
                            <p className="blue">COMPANY</p>
                            <div>
                                <p>About</p>
                                <p>Careers</p>
                                <p>Mobile</p>
                            </div>
                        </div>
                        <div className="width">
                            <p className="blue">CONTACT</p>
                            <div>
                                <p>FAQ</p>
                                <p>Press</p>
                                <p>Affiliate</p>
                            </div>
                        </div>
                        <div className="width">
                            <p className="blue">MORE</p>
                            <div>
                                <p>Airlines</p>
                                <p>Airfees</p>
                                <p>Lawfare Tips</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Footer;