import { useEffect, useState } from "react";
import { pokeMonObjectInterface } from "../scripts/interfaces";
import "../styles/game_container.css";
import state_functions_object from "../scripts/game_container_state_functions";
import { useRef } from "react";
import requestApi from "../scripts/requestApi";
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
        const index =
          state_functions_object.generateRandomIndex(renderedPokeMon);
        requestApi(index).then((data) => {
          setRenderedPokeMon((prevArray) => [...prevArray, data.id]);
          setExistingPokeMon((prevArray) => [...prevArray, data]);
        });
      }
    }
  }, []);
  // This code will be passed down to the memeroy card components to ensure no repeat cards.

  return (
    <div className="game_container">
      {existingPokeMon.map((item) => (
        <button key={item.id}>
          <img src={item.sprite_url} alt="" />
          <p>{item.name}</p>
        </button>
      ))}
    </div>
  );
}

export default GameContainer;
