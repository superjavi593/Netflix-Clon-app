import React, { useEffect, useState } from "react";
import axios from "../axios";
import Keys from "../config/Keys";

import "../stylesheets/Row.css";
function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const baseURL = "https://api.themoviedb.org/3",
    url = `${baseURL}${fetchUrl}`;
  // console.log(url);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  // console.table(movies);
  return (
    <div className="row">
      <h1 className="row_title">{title}</h1>
      <div className="row_posters">
        {movies.map((movie, index) => {
          return (
            <img
              key={movie?.id || index}
              className={`row_poster ${isLargeRow && "row_posterLarge"}`}
              src={`${Keys.tmdb.basePosterUrl}${
                isLargeRow ? movie?.poster_path : movie?.backdrop_path
              }`}
              alt={movie.name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Row;
