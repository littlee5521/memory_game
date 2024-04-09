import React from "react";
import { useState } from "react";
import "../styles/game_container.css";
import MemoryCard from "./memory_card";
function GameContainer() {
  //
  const [pokeMonId, setPokeMonId] = useState<number[]>([]);
  // This code will be passed down to the memeroy card components to ensure no repeat cards.
  const checkIfIdExist = (id: number) => {
    let isValid = false;
    if (!pokeMonId.includes(id)) {
      setPokeMonId((prevArray) => [...prevArray, id]);
      isValid = true;
      return isValid;
    } else {
      return isValid;
    }
  };

  return (
    <div className="game_container">
      <div className="temp"></div>
      <div className="temp"></div>
      <div className="temp"></div>
      <div className="temp"></div>
      <div className="temp"></div>
      <div className="temp"></div>
      <div className="temp"></div>
      <div className="temp"></div>
      <div className="temp"></div>
      <div className="temp"></div>
      <div className="temp"></div>
      <div className="temp"></div>
      <MemoryCard existingIds={checkIfIdExist} />
    </div>
  );
}

export default GameContainer;
