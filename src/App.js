import { useState, useEffect } from "react";
import NavBar from "./components/NavBar"
import './App.css';
import { Outlet } from "react-router-dom";

function App() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
      fetch(`http://localhost:4000/movies`)
        .then((response) => response.json())
        .then((data) => {
          setFavorites(data);
          console.log(favorites);
        })
    }, [])

    function addMovie(newMovie){
      setFavorites([...favorites, newMovie]);
      // console.log(newMovie);
    }

  return (
    <>
      <header>
        <NavBar />
      </header>
      <Outlet context={{favorites, addMovie}}/>
    </>
  );
}

export default App;
