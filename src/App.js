import React from "react";
import "./App.css";
import requests from "./requests";
import Row from "./component/Row";
import Banner from "./component/Banner";
import NavBar from "./component/NavBar";
function App() {
  return (
    <div className="app">
      <NavBar />
      <Banner></Banner>
      <Row
        title="Estrenos"
        fetchUrl={requests.Estrenos}
        isLargeRow={true}
      ></Row>
      <Row title="Lo más valorado" fetchUrl={requests.LoMásValorado}></Row>
      <Row title="Acción" fetchUrl={requests.Acción}></Row>
      <Row title="Animación" fetchUrl={requests.Animación}></Row>
      <Row title="Aventura" fetchUrl={requests.Aventuras}></Row>
      {/* <Row title="Ciencia Ficción" fetchUrl={requests.CienciaFicción}></Row> */}
      <Row title="Comedia" fetchUrl={requests.Comedia}></Row>
      <Row title="Documentaries" fetchUrl={requests.Documentales}></Row>
    </div>
  );
}

export default App;
