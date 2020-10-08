import React from "react";
import "./App.css";
import requests from "./requests";
import Row from "./component/Row";
function App() {
  return (
    <div className="App">
      <h1>Hello From Netflix Clone</h1>
      <Row title="Netflix Originals" fetchUrl={requests.NetflixOriginals}></Row>
      {/* <Row title="Trending "></Row> */}
    </div>
  );
}

export default App;
