import React from "react";
import { useState } from "react";
import requestApi from "../scripts/requestApi";

const MemoryCard: React.FC<MemoryCardProps> = ({ existingIds }) => {
  const [pokeMonObject, setPokeMonObject] = useState({
    id: 0,
    sprite_url: "",
    name: "",
  });
  requestApi(existingIds).then((data) => {
    console.log(data);
  });

  return <div className="memoryCard"></div>;
};

export default MemoryCard;

interface MemoryCardProps {
  existingIds: (id: number) => boolean;
}
