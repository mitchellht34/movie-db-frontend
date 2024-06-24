import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';

function Results({ favorites }) {

    const favoriteList = favorites.map((movie) => (
        <li key={movie.id}>
            <Link to={movie.id} >
                {movie.Title}
            </Link>
        </li>
    ))

    return (
        <ul>{favoriteList}</ul>
    )
}

export default Results;