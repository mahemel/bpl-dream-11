import { Suspense, useState } from "react";
import Banner from "./components/banner/Banner";
import Navbar from "./components/navbar/Navbar";
import Players from "./components/players/Players";
import "./App.css";
import { ToastContainer } from "react-toastify";

const fetchPlayer = async () => {
    const res = await fetch("/playerData.json");
    return res.json();
};
const playerPromise = fetchPlayer();

function App() {
    const [coin, setCoin] = useState(10000);
    return (
        <>
            <Navbar coin={coin}></Navbar>
            <Banner></Banner>
            <Suspense
                fallback={
                    <div className="flex justify-center">
                        <span className="loading loading-dots loading-xl mx-auto"></span>
                    </div>
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
