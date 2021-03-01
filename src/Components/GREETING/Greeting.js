import React from 'react';
import welcomeImg from "../../images/welcome-animate.svg"
import "./Greeting.css"
const Greeting = () => {
    const hideGreet = () => {
        document.querySelector('.welcome-note-area').style.display = "none"
    }

    return (
        <div>
            <div className={`welcome-note-area `}>
                <div className="welcome-note">
                    <div className="img">
                        <img src={welcomeImg} alt="" />
                    </div>
                    <div className="title">
                        <h1>Wow ! Your are going to make an Awesome football Team</h1>
                        <button onClick={hideGreet}>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Greeting;