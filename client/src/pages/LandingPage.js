import React from "react";

import left from "./../images/left.png"
import right from "./../images/right.png"
import banner from "./../images/header.png"
import hacker from "./../images/hacker.png"
import footer from "./../images/footer.png"

const LandingPage = () => {
    return (
        <div className="w-min-screen h-screen overflow-hidden" style={{ backgroundColor: "#7D4696" }}>
            <div className="flex ">
                <img src={left} className="left-0 w-1/4"/>
                <img src={right} className="fixed right-0 w-1/3"/>
                <div className="fixed right-0 sm:pt-0 md:pt-1 lg:pt-3">
                <a className="text-white text-xs sm:text-sm  md:text-md lg:text-lg xl:text-xl text-left justify-between pl-2 sm:pr-2 sm:pl-2  md:pr-5 md:pl-5 lg:pr-15" href="#blog">BLOG</a>
                <a className="text-white text-xs  sm:text-sm md:text-md lg:text-lg xl:text-xl text-left justify-between pl-2 sm:pr-2 sm:pl-2 md:pr-5 md:pl-5 lg:pr-15 lg:pl-10" href="#news">NEWS</a>
                <a className="text-white text-xs  sm:text-sm md:text-md lg:text-lg xl:text-xl text-left justify-between pl-2 pr-1 sm:pr-2 sm:pl-2 md:pr-5 md:pl-5 lg:pr-15  lg:pl-10" href="#team">TEAM</a>
                </div>
            </div>

            <div className= "grid md:grid-cols-2 margin-0 h-auto p-0 xl:h-4/7">
                <div className="md:block col-4 md:pl-10 ">
                    <img src={banner} className=" w-1/3 md:w-5/6 lg:w-5/6 xl:5/6 "/>
                    <p className="lg:text-2xl md:text-lg md:pl-20 lg:pl-20 xl:pl-20 text-xs sm:pl-10 tracking-widest text-white text-left justify-between" >Privacy is a myth..</p>
                </div>
                <div className="col-6 justify-center pt-0">
                    <img src={hacker} className=" w-3/4 md:w-1/2"/>
                    <div className="md:w-5/6 w-3/4 mx-auto flex-initial flex-col md:items-start ">
                        <div className="login-card pt-0 -mx-10 ">
                            <div className="flex flex-col h-full justify-center px-10">
                                <input placeholder="USERNAME" className="p-2 my-2" style={{ backgroundColor :"transparent" }} />
                                <input placeholder="PASSWORD" className="p-2 my-2" style={{ backgroundColor :"transparent" }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex col-end-7 w-fitscreen h-auto object-contain">
            <img src={footer} />
            </div>
        </div>
    )
}

export default LandingPage;