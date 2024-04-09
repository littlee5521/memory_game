import { test2 } from "./interfaces";
//re work this so that there is a seperate functiuon for ensuring the id is not taken. As here it verifys and then ammends even if the api call fails
async function requestApi(
  existingIds: (id: number) => boolean
): Promise<test2> {
  let isValid = false;
  let index: string = "";
  //

  let indexNum = Math.floor(Math.random() * 1025 + 1);
  index = indexNum.toString();
  if (existingIds(indexNum) === true) {
    isValid = true;
  }

  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data: test2 = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
export default requestApi;
