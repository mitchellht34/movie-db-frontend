import { useState, useEffect } from "react";
import Results from "../components/Results";
import { Outlet, useOutletContext } from "react-router-dom";

function Favorites() {
    const favorites = useOutletContext();
    // console.log(favorites);

    return (
        <main>
            <h1>My Favorites</h1>
            <Results favorites={favorites} />
            <Outlet context={favorites} />
        </main>
    );
}

export default Favorites;