import React from "react";

class game_Container_State_Functions {
  doesIdExist(arrayToBeChecked: number[], id: number) {
    if (!arrayToBeChecked.includes(id)) {
      return true;
    } else {
      return false;
    }
  }
  appendId(
    arrayToBeChecked: number[],
    id: number,
    stateToBeUpdated: (value: React.SetStateAction<number[]>) => void
  ) {
    let isValid = false;
    if (!arrayToBeChecked.includes(id)) {
      stateToBeUpdated((prevArray) => [...prevArray, id]);
      isValid = true;
      return isValid;
    } else {
      return isValid;
    }
  }
  handleCardClick(
    arrayToBeChecked: number[],
    id: number,
    stateToBeUpdated: (value: React.SetStateAction<number[]>) => void
  ): () => boolean {
    return () => {
      let clickIsValid = true;
      if (arrayToBeChecked.includes(id)) {
        clickIsValid = false;
        return clickIsValid;
      } else {
        stateToBeUpdated((prevArray) => [...prevArray, id]);
        return clickIsValid;
      }
    };
  }
  generateRandomIndex(arrayToBeChecked: number[]): number {
    let isValid = false;
    let temp = 0;
    while (isValid === false) {
      let indexNum = Math.floor(Math.random() * 1025 + 1);
      if (arrayToBeChecked.includes(indexNum) === false) {
        return indexNum;
      }
    }
    return temp;
  }
}

const state_functions_object = new game_Container_State_Functions();

export default state_functions_object;
