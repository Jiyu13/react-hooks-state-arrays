import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();

    // add new element to array in state
    const newFoodArrary = [...foods, newFood]
    setFoods(newFoodArrary)
  }


  function handleLiClick(id) {

    // remove array element
    // const newFoodArray = foods.filter(food => food.id !== id)
    // setFoods(newFoodArray)


    // update elements in arrays
    const newFoodArray = foods.map(food => { // map literates througe each item in arr, return new arr
      if (food.id === id) {
        return {
          ...food, 
          heatLevel: food.heatLevel+1
        }
      } else {
        return food
      }
    })

    setFoods(newFoodArray)
  }

  const foodList = foods.map((food) => (
    <li key={food.id} onClick={() => handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
