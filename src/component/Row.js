import React, { useEffect, useState } from "react";
import axios from "../axios";
function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      //   request.data
      console.log("request is " + JSON.stringify(request));
      return request;
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}

export default Row;
