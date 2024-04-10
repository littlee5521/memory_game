import { pokeMonInterface } from "./interfaces";
import { pokeMonObjectInterface } from "./interfaces";
import state_functions_object from "./game_container_state_functions";
async function requestApi(
  index: number,
  iteration: number,
  iteration_target: number,
  objectArray?: pokeMonObjectInterface[],
  idArray?: number[]
): Promise<pokeMonObjectInterface[]> {
  let pokeMonObjectPlaceHolder: pokeMonObjectInterface[] = [];
  let idArrayPlaceHolder: number[] = [];
  const pokeMonObject = {
    id: 0,
    sprite_url: "",
    name: "",
  };
  if (iteration < iteration_target) {
    if (iteration !== 0 && objectArray !== undefined && idArray !== undefined) {
      pokeMonObjectPlaceHolder = objectArray;
      idArrayPlaceHolder = idArray;
    }
    iteration++;
    idArrayPlaceHolder.push(index);
    const nextIndex =
      state_functions_object.generateRandomIndex(idArrayPlaceHolder);
    const pokeMonObject = {
      id: 0,
      sprite_url: "",
      name: "",
    };

    //
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${index}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data: pokeMonInterface = await response.json();
      pokeMonObject.id = data.id;
      pokeMonObject.name = data.name;
      pokeMonObject.sprite_url = data.sprites.front_default;
      pokeMonObjectPlaceHolder.push(pokeMonObject);
      requestApi(
        nextIndex,
        iteration,
        iteration_target,
        pokeMonObjectPlaceHolder,
        idArrayPlaceHolder
      );
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }
  return pokeMonObjectPlaceHolder;
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
      const idArray 2 = []
    }
    else {
      objectArray2 = objectArray
      idArray2 = idarray
    }
    iteration++
    const respone = fetch 
    const data = response.json 
    const pokemonObj = //////////
    object_array append pokeMonObj 
    request api (index: () =>, iteration:number, iteration_target:number, ?objecrArray:pokeMonObjectInterface[], ?idArray:number[])
  }
  catcg{

  }
  return objectArray2
}{
}

*/
