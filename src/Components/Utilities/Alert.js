import { faCheckCircle, faQuestionCircle, faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { faExclamationCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./utilities.css"
import React from 'react';

const Alert = (props) => {
    let icon = null;

    //alert show or hide class added
    let isShow = props.alert === true ? "" : "d-none"


    // validation for alert ui type....
    if(props.type === "exclamation"){
        icon = faExclamationCircle;
    }
    else if(props.type === "question"){
        icon = faQuestionCircle
    }
    else if(props.type === "wrong"){
        icon = faTimesCircle;
    }
    else if(props.type === "success"){
        icon = faCheckCircle;
    }



    return (
        <div  onClick={()=>{props.setAlert(false)}} className={`alert-bg-area ${isShow}`}>
            <div className="alert-area warning">
                <hr className="line" />

                <div className="alert-card">
                    <FontAwesomeIcon className="icon" icon={icon} />
                    <h1>{props.title} </h1>
                </div>
                <button onClick={()=>{props.setAlert(false)}} className="close-button">
                    <FontAwesomeIcon icon={faTimes} /> Close
                </button>
            </div>
        </div>
    );
};

export default Alert;