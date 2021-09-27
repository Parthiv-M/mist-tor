import React from 'react';
import './error.css';
import image from "./image/Ellipse.png";
import image2 from "./image/Ellipse2.png";
import four from "./image/4.png";
import four2 from "./image/4_.png";
import zero from "./image/zero.png";
import zero2 from "./image/zero2.png";
import ERROR from "./image/error.png";
import cartoon from "./image/toppng 1.png";
import shadow from "./image/shadow.png";

const PageNotFound = () => {
    return (
  
        <div className="wrapper">
          
        <div className ="container">
         <img src={image} alt="Image here"/>
          <img className="img2" src={image2} alt="Image here"/>
          <div className="button"><h2>WAKE UP</h2></div>
         </div>
          <img className="errorText" src={ERROR} alt="Image here"/>
          <img className="four" src={four} alt="Image here"/>
          <img className="zero" src={zero} alt="Image here"/>
          <img className="zero2" src={zero2} alt="Image here"/>
          <img className="cartoon" src={cartoon} alt="Image here"/>
          <img className="shadow" src={shadow} alt="Image here"/>
           <img className="four2" src={four2} alt="Image here"/>
       
            <div id="info">
              <h3 >Sorry! The Page You're Looking For Has Gone To Sleep</h3>
            </div>
        </div >
    )
}

export default PageNotFound;