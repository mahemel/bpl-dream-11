import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const SelectedPlayer = ({ player, handlePlayerDelete }) => {
    return (
        <div className="flex justify-between items-center p-5 border border-gray-200 rounded-2xl">
            <div className="flex items-center gap-5">
                <img
                    className="w-20 h-20 object-cover rounded-xl"
                    src={player.image}
                    alt={player.playerName}
                />
                <div>
                    <h2 className="font-bold text-2xl">{player.playerName}</h2>
                    <p>{player.battingStyle}</p>
                </div>
            </div>

            <button
                onClick={() => handlePlayerDelete(player)}
                className="btn btn-square text-red-500"
            >
                <RiDeleteBin6Line />
            </button>
        </div>
    );
};

export default SelectedPlayer;
