import React, { useEffect, useState } from "react";
import axios from "../axios";
import Keys from "../config/Keys";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

import "../stylesheets/Row.css";
function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  // const baseURL = "https://api.themoviedb.org/3",
  // url = `${baseURL}${fetchUrl}`;
  // console.log(url);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleClick = (movie) => {
    console.log("click on " + movie.name);
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          // getting the trailer id
          // https://www.youtube.com/watch?v=KBtk5FUeJbk

          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.error(error));
    }
  };
  // console.table(movies);
  return (
    <div className="row">
      <h1 className="row_title">{title}</h1>
      <div className="row_posters">
        <div className="trailer"></div>
        {movies.map((movie) => {
          return (
            <img
              key={movie?.id}
              onClick={() => handleClick(movie)}
              className={`row_poster ${isLargeRow && "row_posterLarge"}`}
              src={`${Keys.tmdb.basePosterUrl}${
                isLargeRow ? movie?.poster_path : movie?.backdrop_path
              }`}
              alt={movie.name}
            />
          );
        })}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
