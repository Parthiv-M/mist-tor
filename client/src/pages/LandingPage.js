import React from "react";

import left from "./../images/left.png"
import right from "./../imagesright.png"
import banner from "./../images/header.png"
import hacker from "./../images/hacker.png"

const LandingPage = () => {
    return (
        <div className="w-min-screen h-screen overflow-hidden" style={{ backgroundColor: "#7D4696" }}>
            <div className="flex">
                <img src={left} className="left-0"/>
                <img src={right} className="fixed right-0"/>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1">
                <div className="md:block hidden col-6 md:p-16 p-5">
                    <img src={banner} />
                </div>
                <div className="col-6 justify-center">
                    <img src={hacker} className="w-3/4 md:w-auto"/>
                    <div className="md:w-5/6 w-3/4 mx-auto flex flex-col md:items-start items-center">
                        <div className="login-card p-0 -mx-10">
                            <div className="flex flex-col h-full justify-center px-10">
                                <input placeholder="Username" className="p-2 my-2" style={{ backgroundColor :"transparent" }} />
                                <input placeholder="Password" className="p-2 my-2" style={{ backgroundColor :"transparent" }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;