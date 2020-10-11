import React from "react";
import "./App.css";
import requests from "./requests";
import Row from "./component/Row";
import Banner from "./component/Banner";
function App() {
  return (
    <div className="app">
      <Banner></Banner>
      <Row
        title="Netflix Originals"
        fetchUrl={requests.NetflixOriginals}
        isLargeRow={true}
      ></Row>
      <Row title="Trending" fetchUrl={requests.Trending}></Row>
      <Row title="Top Rated" fetchUrl={requests.TopRatedMoves}></Row>
      <Row title="Actions Movies" fetchUrl={requests.ActionsMovies}></Row>
      <Row title="Comedy Movies" fetchUrl={requests.ComedyMovies}></Row>
      {/* <Row title="Horror Movies" fetchUrl={requests.HorrorMovies}></Row> */}
      <Row title="Romance Movies" fetchUrl={requests.RomanceMovies}></Row>
      <Row title="Documentaries" fetchUrl={requests.Documentaries}></Row>
    </div>
  );
}

export default App;
