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
      for (let i = 0; i < 15; i++) {
        ///this needs to be rewritten as now the number is generated twice and the rendered array is no longer correcrt
        const index =
          state_functions_object.generateRandomIndex(renderedPokeMon);
        setRenderedPokeMon((prevArray) => [...prevArray, index]);
        requestApi({ index }).then((data) => {
          if (!existingPokeMon.some((item) => item.id === data.id)) {
            setExistingPokeMon((prevArray) => [...prevArray, data]);
          }
        });
      }
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
          console.log(renderedPokeMon);
        }}
      ></button>
      <button
        onClick={() => {
          console.log(existingPokeMon);
        }}
      ></button>
    </div>
  );
}

export default GameContainer;
