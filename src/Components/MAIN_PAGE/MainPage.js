import { faCheckCircle, faVolleyballBall } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import PlayerPreview from "../PLAYER_PREVIEW/PlayerPreview";
import "./MainPage.css";
import PlayersData from "../../Data/Data.json";
import PlayerCard from "../PLAYER_CARD/PlayerCard";
import SelectedPlayer from "../SELECTED_PLAYER/SelectedPlayer";
import Alert from "../Utilities/Alert";
import FullTeamViewer from "../FULL_TEAM_VIEWER/FullTeamViewer";

const MainPage = () => {
    const [Players, setPlayers] = useState(PlayersData); // player data import from json file
    const [selectedPlayers, setSelectedPlayers] = useState([]); // to stroge selected player
    const [playerForPreview, setPlayerForPreview] = useState(Players[0]); //  get specific player for preview
    const [alert, setAlert] = useState(false); //for alert
    const [isShowFullTeamVisible, setIsShowFullTeamVisible] = useState(false); // full team viewer visiblity

    const getSelectedPlayers = (player) => {
        if (selectedPlayers.indexOf(player) === -1) {
            setSelectedPlayers([...selectedPlayers, player]);
        } else {
            setAlert(true);
        }
    };
    
    const largePreview = (player) => {
        setPlayerForPreview(player);
    };

    return (
        <div>
            <Alert type="exclamation" title="Already Added" setAlert={setAlert} alert={alert} />

            {/* navbar */}
            <nav className="navbar">
                <h1>
                    <FontAwesomeIcon icon={faVolleyballBall} /> SN Fc
                </h1>
            </nav>

            {/* page layout */}
            <div className="layout">
                <div className="left-top">
                    <PlayerPreview playerForPreview={playerForPreview}></PlayerPreview>
                </div>

                <div className="right-site">
                    <div className="inner">
                        <SelectedPlayer setIsShowFullTeamVisible={setIsShowFullTeamVisible} selectedPlayers={selectedPlayers}></SelectedPlayer>
                    </div>
                </div>

                <div className="left-bottom">
                    <h3 className="text-center">
                        <FontAwesomeIcon style={{ color: "green" }} icon={faCheckCircle} /> Choose Player your Team
                    </h3>
                    <hr className="m-1" />
                    <div className="inner">
                        {Players.map((player) => (
                            <PlayerCard largePreview={largePreview} getSelectedPlayers={getSelectedPlayers} player={player}></PlayerCard>
                        ))}
                    </div>
                </div>
            </div>
            <FullTeamViewer isShowFullTeamVisible={isShowFullTeamVisible} setIsShowFullTeamVisible={setIsShowFullTeamVisible} selectedPlayers={selectedPlayers} />
        </div>
    );
};

export default MainPage;
