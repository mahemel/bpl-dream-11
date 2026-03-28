import React, { useState } from "react";
import { FaFlag, FaUser } from "react-icons/fa";
import { toast } from "react-toastify";

const Player = ({
    player,
    setCoin,
    coin,
    selectedPlayers,
    setSelectedPlayers,
}) => {
    const [playerChoose, setPlayerChoose] = useState(false);

    const handleChoosePlayer = () => {
        const playerPrice = playerChoose
            ? coin + player.price
            : coin - player.price;

        if (playerPrice >= 0) {
            setCoin(playerPrice);
            setPlayerChoose(!playerChoose);
            let message = !playerChoose
                ? `${player.playerName} is purchased!`
                : `${player.playerName} is removed!`;

            setSelectedPlayers([...selectedPlayers, player]);
            toast.success(message);
        } else {
            toast.error("You do not have enough coin to purchase this player!");
        }
    };

    return (
        <div className="card bg-base-100 border border-gray-200 rounded-xl">
            <figure className="p-0">
                <img
                    src={player.image}
                    alt={player.playerName}
                    className="rounded-xl w-full h-56 object-cover"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    <FaUser></FaUser>
                    {player.playerName}
                </h2>

                <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                        <FaFlag></FaFlag>
                        {player.playerCountry}
                    </div>
                    <div className="badge badge-ghost">{player.playerType}</div>
                </div>

                <div className="divider m-0"></div>

                <p className="font-bold">Rating: {player.rating}</p>

                <p className="font-bold flex justify-between">
                    {player.battingStyle}
                    <span className="font-normal">{player.bowlingStyle}</span>
                </p>

                <div className="flex items-center">
                    <p className="font-bold">${player.price}</p>

                    <button
                        onClick={handleChoosePlayer}
                        className="btn"
                        disabled={playerChoose}
                    >
                        {playerChoose ? "Selected" : "Choose Player"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Player;
