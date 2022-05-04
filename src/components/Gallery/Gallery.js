import React from "react";
import './Gallery.css'
import gal1 from './gal1.jpg'
import gal2 from './gal2.jpg'
import gal3 from './gal3.jpg'
import gal4 from './gal4.jpg'

const Gallery =()=> {
    return(
        <div className="gallery">
            <div className="gallery-width">
                <div className="gal-img-text">
                    <div className="container gall-text">
                        <h1>The best resorts to chill <br />
                            and relax
                        </h1>
                    </div>
                    <div className="gal-img">
                        <div className="gal-img1 left1">
                            <img src={gal1}/>
                        </div>
                        <div className="gal-img2 left2">
                            <img src={gal2}/>
                        </div>
                    </div>
                </div>
                <div className="gal2-img">
                    <div className="left3 gal2-width ">
                        <div className="gal2-overlay">
                            {/* <img src={gal3}/> */}
                            <h2>Winter landscape Chalet</h2>
                            <p>Cambodi</p>
                            <div className="but">
                                <button>Book Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="left4">
                        <img src={gal4}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery;