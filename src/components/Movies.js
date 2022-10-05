import React from "react";
import { movies } from "../data";

function Movies() {
  const displayMovies = movies.map((movieProp) => (
      <div key={movieProp.title}>
        <h2>Name:{movieProp.title}</h2>
        <p>Time:{movieProp.time}</p>
        <ul>
          {movieProp.genres.map((genre) => (
         <li key={genre}>{genre}</li>
          ))}
        </ul>
      </div>
  ));
  
  return (
    <div>
      <h1>Movies Page</h1>
      {displayMovies}
    </div>
  );
}

export default Movies;
