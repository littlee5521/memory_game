import { pokeMonInterface } from "./interfaces";
import { pokeMonObjectInterface } from "./interfaces";
async function requestApi(index: number): Promise<pokeMonObjectInterface> {
  const pokeMonObject = {
    id: 0,
    sprite_url: "",
    name: "",
  };
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data: pokeMonInterface = await response.json();
    pokeMonObject.id = data.id;
    pokeMonObject.name = data.name;
    pokeMonObject.sprite_url = data.sprites.front_default;
    return pokeMonObject;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
export default requestApi;

/*
recursion {
  const pokeMonObject = {
    id: 0,
    sprite_url: "",
    name: "",
  };
  if(iteration<iteration_target) {
  try {
    if(iteration === 0) {
      const objectArray2 = []
    }
    else {
      objectArray2 = objectArray
    }
    iteration++
    const respone = fetch 
    const data = response.json 
    const pokemonObj = //////////
    object_array append pokeMonObj 
    request api (index, iteration, iteration_target, ?objecrArray)
  }
  catcg{

  }
  return objectArray2
}{
}

*/
