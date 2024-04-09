import React from "react";
import { useState } from "react";
import "../styles/game_container.css";
import MemoryCard from "./memory_card";
import { useEffect } from "react";
function GameContainer() {
  //
  const [renderedPokeMon, setRenderedPokeMon] = useState<number[]>([]);
  const [clickedPokeMon, setClickedPokemon] = useState<number[]>([]);
  useEffect(() => {
    console.log(renderedPokeMon);
  }, [renderedPokeMon]);
  // This code will be passed down to the memeroy card components to ensure no repeat cards.
  const checkIfIdExist = (id: number) => {
    let isValid = false;
    if (!renderedPokeMon.includes(id)) {
      setRenderedPokeMon((prevArray) => [...prevArray, id]);
      isValid = true;
      return isValid;
    } else {
      return isValid;
    }
  };

  return (
    <div className="game_container">
      <MemoryCard existingIds={checkIfIdExist} />
      <button
        onClick={() => {
          console.log(renderedPokeMon);
        }}
      ></button>
    </div>
  );
}

export default GameContainer;
