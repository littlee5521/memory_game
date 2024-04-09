import React from "react";
import { useState } from "react";
import "../styles/game_container.css";
import MemoryCard from "./memory_card";
import { useEffect } from "react";
function GameContainer() {
  //
  const [renderedPokeMon, setRenderedPokeMon] = useState<number[]>([]);
  const [clickedPokeMon, setClickedPokemon] = useState<number[]>([]);
  // This code will be passed down to the memeroy card components to ensure no repeat cards.
  const doesIdExist = (id: number) => {
    if (!renderedPokeMon.includes(id)) {
      return true;
    } else {
      return false;
    }
  };
  const ammedId = (id: number) => {
    let isValid = false;
    if (!renderedPokeMon.includes(id)) {
      setRenderedPokeMon((prevArray) => [...prevArray, id]);
      isValid = true;
      return isValid;
    } else {
      return isValid;
    }
  };
  const handleCardClick = (id: number) => {
    let clickIsValid = true;
    if (clickedPokeMon.includes(id)) {
      clickIsValid = false;
      return clickIsValid;
    } else {
      setClickedPokemon((prevArray) => [...prevArray, id]);
      return clickIsValid;
    }
  };

  return (
    <div className="game_container">
      <MemoryCard
        existingIds={ammedId}
        isClickValid={handleCardClick}
        isIdValid={doesIdExist}
      />
      <button
        onClick={() => {
          console.log(renderedPokeMon);
        }}
      ></button>
    </div>
  );
}

export default GameContainer;
