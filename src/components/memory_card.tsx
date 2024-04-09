import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import requestApi from "../scripts/requestApi";

const MemoryCard: React.FC<MemoryCardProps> = ({ existingIds }) => {
  const [pokeMonObject, setPokeMonObject] = useState({
    id: 0,
    sprite_url: "",
    name: "hello",
  });
  //
  useEffect(() => {
    requestApi(existingIds).then((data) => {
      console.log(data);
      setPokeMonObject((prevObject) => {
        return {
          ...prevObject,
          id: data.id,
          sprite_url: data.sprites.front_default,
          name: data.name,
        };
      });
      console.log(pokeMonObject);
    });
  }, []);
  //
  return (
    <div className="memoryCard">
      <button>
        <img src={pokeMonObject.sprite_url} alt="a pokemon" />
        <p>{pokeMonObject.name}</p>
      </button>
    </div>
  );
};

export default MemoryCard;

interface MemoryCardProps {
  existingIds: (id: number) => boolean;
}
