import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import requestApi from "../scripts/requestApi";
import { useRef } from "react";

const MemoryCard: React.FC<MemoryCardProps> = ({
  existingIds,
  isClickValid,
  isIdValid,
}) => {
  const hasLoadedBefore = useRef(true);
  const [pokeMonObject, setPokeMonObject] = useState({
    id: 0,
    sprite_url: "",
    name: "hello",
  });
  //
  useEffect(() => {
    if (hasLoadedBefore.current) {
      hasLoadedBefore.current = false;
      requestApi(existingIds, isIdValid).then((data) => {
        console.log("I shoyld only be here once");
        setPokeMonObject((prevObject) => {
          return {
            ...prevObject,
            id: data.id,
            sprite_url: data.sprites.front_default,
            name: data.name,
          };
        });
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
  existingIds: (id: number) => boolean;
  isIdValid: (id: number) => boolean;
  isClickValid: (id: number) => boolean;
}
