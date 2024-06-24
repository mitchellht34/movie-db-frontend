import { useState, useEffect } from "react";
import Results from "../components/Results";
import { Outlet, useOutletContext } from "react-router-dom";

function Favorites() {
    const {favorites, addMovie} = useOutletContext();
    // console.log(favorites);

    const [moviesToDisplay, setMoviesToDisplay] = useState(favorites);

    function newMovieDisplay(newMovie) {
        setMoviesToDisplay([...moviesToDisplay, newMovie]);
    }

    return (
        <main>
            <h1>My Favorites</h1>
            <Results favorites={moviesToDisplay} />
            <Outlet context={{favorites, addMovie, newMovieDisplay}} />
        </main>
    );
}

export default Favorites;