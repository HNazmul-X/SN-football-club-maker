import React, { useState } from 'react';
import welcomeImg from "../../images/welcome-animate.svg"
import "./Greeting.css"
const Greeting = () => {
    const [hideGreeting, setHideGreeting] = useState(true) // for show and hiding greeting

    return (
        <div>
            <div className={`welcome-note-area ${hideGreeting === true ? "" : "d-none"} `}>
                <div className="welcome-note">
                    <div className="img">
                        <img src={welcomeImg} alt="" />
                    </div>
                    <div className="title">
                        <h1>Wow ! Your are going to make an Awesome football Team</h1>
                        <button onClick={()=>setHideGreeting(false)}>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Greeting;