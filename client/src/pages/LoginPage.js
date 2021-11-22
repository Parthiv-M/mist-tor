import React from 'react';
import './LoginPage.css';
import align1 from "./images/nav1.png";
import align2 from "./images/nav2.png";
import align3 from "./images/top.png";
import align4 from "./images/side.png";
import align5 from "./images/side1.png";
import align6 from "./images/side2.png";
import align7 from "./images/bottom.png";

const LoginPage = () => {
    return (
      
        <div className ="wrapper">
    <div className="align1">
    <img className="object-left-top sm:w-1/2 md:w-3/4 lg:w-auto" src={align1} align="left" />
    </div>
    <div className="align2">
    <img className="object-right-top sm:w-1/2 md:w-3/4 lg:w-auto " src={align2} align="right" />
    <div className="text1">
      <a className="text-white sm:text-sm md:text-md lg:text-lg text-right justify-between p-1 absolute " href="#news">BLOG</a>
      </div>
      <div className="text2">
      <a className="text-white sm:text-sm md:text-md lg:text-lg text-right justify-between p-1 absolute " href="#contact">NEWS</a>
      </div>
      <div className="text3">
      <a className="text-white sm:text-sm md:text-md lg:text-lg text-right justify-between p-1 absolute " href="#about">TEAM</a>
    </div>
    </div>

      <div className="md:grid-cols-2 lg:grids-cols-2">
        <div className="section1">
    <div className="align3">
    <img className="object-left sm:w-1/2 md:w-3/4 lg:w-auto relative" src={align3} align="left" />
    <div className="text4">
    <p className="text-left absolute sm:text-md md:text-xl lg:text-3xl text-white text-opacity-100" >the</p>
    </div>
    <div className="text5">
    <p className="text-left absolute sm:text-xl md:text-3xl lg:text-6xl text-white text-opacity-100">MIST</p>
    </div>
    <div className="text6">
    <p className="text-left absolute sm:text-md md:text-xl lg:text-3xl text-white text-opacity-100">tor project</p>
    </div>
    <div className="text7">
    <p className="text-left absolute sm:text-sm md:text-md lg:text-lg text-white text-opacity-100">privacy is a myth..</p>
    </div>
  </div>
  </div>
<div className="section2">
<div className="align4">
  <img className="object-right sm:w-1/2 md:w-3/4 lg:w-auto " src={align4} align="right" />
  </div>
  <div className="align5">
    <img className="object-right sm:w-1/2 md:w-3/4 lg:w-auto" src={align5} align="right" />
    </div>
    <div className="align6">
    <img className="object-right mix-overlay sm:w-1/2 md:w-3/4 lg:w-auto" src={align6} align="right" />
  <form className="modal-content animate " action="/action_page.php" method="post">
    <div className="form1">
      <input name = "USERNAME" id = "search" placeholder="USERNAME" />
      </div>
      <div className="form2">
      <input name="PASSWORD" id = "search" placeholder="PASSWORD" />
      </div>
      <button type="submit"></button>
    </form>
    </div>
    <div className="text8">
    <p className=" text-left absolute sm:text-sm md:text-md lg:text-lg text-white text-opacity-100">forgot password?click here</p>
  </div>
  </div>
  </div>

  <div className="align7">
  <img className="object-bottom sm:w-auto md:w-auto lg:w-auto" src={align7} align="left" />
  </div>
</div>
    )
}

export default LoginPage;