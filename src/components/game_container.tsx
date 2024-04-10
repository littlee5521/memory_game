import { useEffect, useState } from "react";
import { pokeMonObjectInterface } from "../scripts/interfaces";
import "../styles/game_container.css";
import state_functions_object from "../scripts/game_container_state_functions";
import { useRef } from "react";
import requestApi from "../scripts/requestApi";
import MemoryCard from "./memory_card";
function GameContainer() {
  //
  const [renderedPokeMon, setRenderedPokeMon] = useState<number[]>([]);
  const [clickedPokeMon, setClickedPokemon] = useState<number[]>([]);
  const [existingPokeMon, setExistingPokeMon] = useState<
    pokeMonObjectInterface[]
  >([]);
  const hadLoadedBefore = useRef(true);

  useEffect(() => {
    if (hadLoadedBefore.current) {
      hadLoadedBefore.current = false;
      const temp = [0];
      const index = state_functions_object.generateRandomIndex(temp);
      requestApi(index, 0, 100).then((data) => {
        console.log(data);
        setExistingPokeMon(data);
        console.log("I should only run at the end");
      });
    }
  }, []);

  return (
    <div className="game_container">
      {existingPokeMon.map((item) => (
        <MemoryCard
          key={item.id}
          pokeMonObject={item}
          isClickValid={state_functions_object.handleCardClick(
            clickedPokeMon,
            item.id,
            setClickedPokemon
          )}
        />
      ))}
      <button
        onClick={() => {
          console.log(existingPokeMon);
        }}
      ></button>
    </div>
  );
}

export default GameContainer;
