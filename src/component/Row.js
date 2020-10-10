import React, { useEffect, useState } from "react";
import axios from "../axios";

import "../stylesheets/Row.css";
const basePosterUrl = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const baseURL = "https://api.themoviedb.org/3",
    url = `${baseURL}${fetchUrl}`;
  console.log(url);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      //   request.data
      // console.log("request is " + JSON.stringify(request.data.results));
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  // console.table(movies);
  // movies.map((movie) => console.log(movie.original_name));
  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row_posters">
        {movies.map((movie, index) => {
          return (
            <img
              key={movie.id}
              className={`row_poster ${isLargeRow && "row_posterLarge"}`}
              src={`${basePosterUrl}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
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
