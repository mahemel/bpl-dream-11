import React, { use, useState } from "react";
import AvailablePlayers from "../availablePlayers/AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers";

const Players = ({ playerPromise, setCoin, coin }) => {
    const players = use(playerPromise);

    const [active, setActive] = useState(false);
    const [selectedPlayers, setSelectedPlayers] = useState([]);

    return (
        <>
            <div className="container mx-auto">
                <div className="flex items-center justify-between mt-22 mb-8">
                    <h1 className="font-bold text-3xl">
                        {!active
                            ? "Available players"
                            : `Selected Players(${selectedPlayers.length}/${players.length})`}
                    </h1>

                    <div className="flex">
                        <button
                            onClick={() => setActive(false)}
                            className={`btn rounded-2xl rounded-r-none border-r-0 ${active === false ? "bg-[#E7FE29]" : ""}`}
                        >
                            Available
                        </button>
                        <button
                            onClick={() => setActive(true)}
                            className={`btn rounded-2xl rounded-l-none border-l-0 gap-0 ${active === true ? "bg-[#E7FE29]" : ""} `}
                        >
                            Selected
                            <span id="selectedCount">
                                ({selectedPlayers.length})
                            </span>
                        </button>
                    </div>
                </div>

                <div className={`${active ? "hidden" : ""}`}>
                    <AvailablePlayers
                        players={players}
                        setCoin={setCoin}
                        coin={coin}
                        selectedPlayers={selectedPlayers}
                        setSelectedPlayers={setSelectedPlayers}
                    ></AvailablePlayers>
                </div>

                <div className={`${!active ? "hidden" : ""}`}>
                    <SelectedPlayers
                        selectedPlayers={selectedPlayers}
                        setSelectedPlayers={setSelectedPlayers}
                        setCoin={setCoin}
                        coin={coin}
                    ></SelectedPlayers>
                </div>
            </div>
        </>
    );
};

export default Players;
