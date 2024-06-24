import { useState, useEffect } from "react";
import Results from "../components/Results";
import { Outlet, useOutletContext } from "react-router-dom";

function Favorites() {
    const {favorites, reload, handleReload} = useOutletContext();
    // console.log(favorites);
    useEffect(() => {
        handleReload();
    }, [])

    return (
        <main>
            <h1>My Favorites</h1>
            <Results favorites={favorites} />
            <Outlet context={{favorites, reload, handleReload}} />
        </main>
    );
}

export default Favorites;