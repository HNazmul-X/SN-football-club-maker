import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./PlayerCard.css";

const PlayerCard = (props) => {
    const {name,img} = props.player
    return (
        <div>
            <div className="player-card"onClick={()=>{props.getSelectedPlayers(props.player)}} onMouseOver={()=>{props.largePreview(props.player)}}>
                <div className="row align-items-center">
                    <div className="col-md-4 player-img ">
                        <img className="img-fluid" src={img} alt="" />
                    </div>
                    <div className="col-md-8">
                        <h4 className="title">{name}</h4>
                        <button > <FontAwesomeIcon className="plus-icon" icon={faPlus}/> select</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayerCard;
