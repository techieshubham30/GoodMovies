import React, { useState } from "react";
import "./styles.css";

const movieDB = {
  action: [
    { name: "The Suicide Squad", rating: "4/5" },
    { name: "Black Widow", rating: "3.5/5" }
  ],

  comedy: [
    {
      name: "Hera Pheri",
      rating: "5/5"
    },
    {
      name: "3 idiots",
      rating: "4/5"
    },
    {
      name: "Dhamaal",
      rating: "4.5/5"
    }
  ],
  horror: [
    {
      name: " Alien ",
      rating: "4/5"
    },
    {
      name: "It",
      rating: "3.5/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("horror");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> 🎥 goodMovies </h1>
      <p> Checkout my favorite movies. Select a genre to get started </p>

      <div>
        {Object.keys(movieDB).map((genre) => (
          <button onClick={() => genreClickHandler(genre)}>{genre}</button>
        ))}
      </div>

      <div className="list">
        <ul>
          {movieDB[selectedGenre].map((movie) => (
            <li>
              {" "}
              <div> {movie.name} </div>
              <div> {movie.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
