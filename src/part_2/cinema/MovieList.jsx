import React from "react";
import { getAllMovies } from "../../database/movie";
import MovieCart from "./MovieCart";

const MovieList = () => {
  const movies = getAllMovies();

  return (
    <div className="content">
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
        {movies.map((movie) => (
          <MovieCart key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
