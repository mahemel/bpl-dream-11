import React from "react";
import SelectedPlayer from "./SelectedPlayer";
import { toast } from "react-toastify";

const SelectedPlayers = ({
    selectedPlayers,
    setSelectedPlayers,
    coin,
    setCoin,
}) => {
    const handlePlayerDelete = (playerItem) => {
        const selectedPlayerList = selectedPlayers.filter(
            (item) => item !== playerItem,
        );
        setSelectedPlayers(selectedPlayerList);
        setCoin(coin + playerItem.price);
        toast.error(`${playerItem.playerName} is removed.`);
    };
    return selectedPlayers.length ? (
        <div className="grid grid-cols-1 gap-5">
            {selectedPlayers.map((player, index) => {
                return (
                    <SelectedPlayer
                        key={index}
                        player={player}
                        handlePlayerDelete={handlePlayerDelete}
                    ></SelectedPlayer>
                );
            })}
        </div>
    ) : (
        <div className="py-6">
            <h2 className="text-2xl font-bold text-center">
                There is no selected players.
            </h2>
        </div>
    );
};

export default SelectedPlayers;
