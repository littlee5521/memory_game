import React from "react";
import { pokeMonObjectInterface } from "../scripts/interfaces";

const MemoryCard: React.FC<MemoryCardProps> = ({
  pokeMonObject,
  isClickValid,
}) => {
  //
  //
  return (
    <div className="memoryCard">
      <button
        onClick={() => {
          console.log(isClickValid(pokeMonObject.id));
        }}
      >
        <img src={pokeMonObject.sprite_url} alt="a pokemon" />
        <p>{pokeMonObject.name}</p>
      </button>
    </div>
  );
};

export default MemoryCard;

interface MemoryCardProps {
  pokeMonObject: pokeMonObjectInterface;
  isClickValid: (id: number) => boolean;
}
