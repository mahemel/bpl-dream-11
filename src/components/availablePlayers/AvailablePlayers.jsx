import React from "react";
import Player from "../players/Player";

const AvailablePlayers = ({
    players,
    setCoin,
    coin,
    selectedPlayers,
    setSelectedPlayers,
}) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {players.map((player, index) => {
                return (
                    <Player
                        key={index}
                        player={player}
                        setCoin={setCoin}
                        coin={coin}
                        selectedPlayers={selectedPlayers}
                        setSelectedPlayers={setSelectedPlayers}
                    ></Player>
                );
            })}
        </div>
    );
};

export default AvailablePlayers;
