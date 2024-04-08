import React from "react";
import "./styles/App.css";
import GameContainer from "./components/game_container";
import requestApi from "./scripts/requestApi";
import { useEffect } from "react";

function App() {
  requestApi().then((data) => {
    let some = data.id;
    console.log(some);
  });
  return (
    <div className="App">
      <GameContainer></GameContainer>
    </div>
  );
}

export default App;

export interface test2 {
  id?: number;
}
