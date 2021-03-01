import React from "react";
import "./FullTeamViewer.css"

const FullTeamViewer = (props) => {
    const players = props.selectedPlayers;
   const isShowFullTeamVisible = props.isShowFullTeamVisible === false ? "d-none" : ""
    return (
        <div>
            <div className={`full-team-shower-area ${isShowFullTeamVisible}`}>
                <div className="title text-center">
                    <h1>See Your Full Team Members</h1>
                    <hr className="m-1"/>

                </div>
                <div className="fts-cards"> {/* fts => Full team Shower*/}
                   {players.map((player)=>{
                       return (
                           <div className="fts-card">
                               <div className="image">
                                   <img src={player.img} alt="" />
                               </div>
                               <div className="desc">
                                   <h5>{player.name}</h5>
                               </div>
                           </div>
                       );
                   })}
                   <button onClick={()=>{props.setIsShowFullTeamVisible(false)}} className="close-button">&times;</button>
                </div>
            </div>
        </div>
    );
};

export default FullTeamViewer;
