import { Suspense, useState } from "react";
import Banner from "./components/banner/Banner";
import Navbar from "./components/navbar/Navbar";
import Players from "./components/players/Players";
import "./App.css";
import Modal from "./components/modals/Modal";
import { ToastContainer } from "react-toastify";

const fetchPlayer = async () => {
    const res = await fetch("/playerData.json");
    return res.json();
};

function App() {
    const playerPromise = fetchPlayer();
    const [coin, setCoin] = useState(10000);
    return (
        <>
            <Navbar coin={coin}></Navbar>
            <Banner></Banner>
            <Suspense
                fallback={
                    <span className="loading loading-dots loading-xl"></span>
                }
            >
                <Players
                    playerPromise={playerPromise}
                    setCoin={setCoin}
                    coin={coin}
                ></Players>
            </Suspense>
            <ToastContainer></ToastContainer>
        </>
    );
}

export default App;
