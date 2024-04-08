import { test2 } from "../App";

async function requestApi(): Promise<test2> {
  let index: string = Math.floor(Math.random() * 1025 + 1).toString();

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
