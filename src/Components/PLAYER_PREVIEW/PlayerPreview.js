import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./PlayerPreview.css"

const PlayerPreview = (props) => {
    const { name, age, country, img, sellary ,email,popularity, playedMatch } = props.playerForPreview;


    // dynamic review 
    let reviews = []
    for(let i = 0; i  < popularity ; i ++){
         reviews.push(<FontAwesomeIcon className="star-icon" icon={faStar} />);
    } 

    return (
        <div>
            <div className="card player-preview mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img className="img-fluid" src={img} alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Name : {name}</h5>
                            <p className="card-text">Country: {country}</p>
                            <p className="card-text">Age: {age}</p>
                            <p className="card-text">PlayedMatch: {playedMatch}</p>
                            <p className="card-text">Email: {email}</p>
                        </div>
                        <div className="card-footer">
                            <div className="row">
                                <div className="col-md-4">
                                    <p className="card-text">sellary: ${sellary}</p>
                                </div>
                                <div className="col-md-8">
                                    Review :  { reviews}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayerPreview;
