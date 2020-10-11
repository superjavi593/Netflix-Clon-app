import React, { useEffect, useState } from "react";
import axios from "../axios";
import requests from "../requests";
import Keys from "../config/Keys";
import "../stylesheets/Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);
  console.log(requests.NetflixOriginals);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(requests.NetflixOriginals);
      //getting a single random movie
      setMovie(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length - 1)
        ]
      );
      return response;
    }
    fetchData();
  }, []);
  console.log(movie);
  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(${Keys.tmdb.basePosterUrl}${movie?.backdrop_path})`,
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">{movie?.name || movie?.original_name}</h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">
          {`${movie?.overview}`.substring(0, 150) + "..."}
        </h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
