import React from 'react';
import image from  "./../../assets/teams/Curves.png";
import image2 from  "./../../assets/teams/logoo.png";
import heading from  "./../../assets/teams/mist.png";
import heading2 from  "./../../assets/teams/two.png";
import line1 from  "./../../assets/teams/Vector 6.png";

import "./teams.css";










const TeamMembers = () => {
    return (
        <div className="w-screen h-screen overflow-hidden wrapper">
            
            <div classNmae="header">
              <img className="head absolute z-10  sm:mt-28 sm:ml-8 h-1/4 " src={heading} alt="logo"></img>
             <img className="line1 absolute z-10   mt-72 sm:ml-10" src={line1}></img> 
             <img className="absolute z-10  h-4 mt-80 sm:ml-10" src={heading2} alt="logo"></img>
             </div>
             <img className="absolute z-20 inset-x-0 bottom-0 lg:h-48 lg:w-full" src={image} alt="curve"></img>
             <img className="absolute z-10 bottom-0 right-0 h-3/4 " src={image2} alt="logo"></img>

     

        </div>
        )
}


export default TeamMembers ;