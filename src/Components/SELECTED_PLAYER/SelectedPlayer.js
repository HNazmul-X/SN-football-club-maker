import { faUserCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./Selected_player.css"

const SelectedPlayer = (props) => {
    
    const players = props.selectedPlayers;
    const totalSellary = players.reduce((acc,curr)=>acc + curr.sellary,0)


    return (
        <div className="p-2">
            <div className="details text-center">
                <div className="">
                    <h5>Selected Player</h5>
                    <h5>{players.length}</h5>
                    <hr className="m-1" />
                </div>
                <div className="added-player">
                    {players.map(player =>{
                        return <li className="player-name"> <FontAwesomeIcon className="user-check" icon={faUserCheck}/> {player.name}</li>;
                        
                    })}
                </div>
                <div className="total-sellary">
                    <hr className="m-1"/>
                    <h5>Total Sellary</h5>
                    <h5>$ {totalSellary}</h5>
                </div>
            </div>
        </div>
    );
};

export default SelectedPlayer;