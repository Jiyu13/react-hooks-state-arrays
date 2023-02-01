import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  // 1.1handle add food
  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();

    // 1.2 add new element to array in state
    const newFoodArrary = [...foods, newFood]
    setFoods(newFoodArrary)
  }


  // 2.1 handle remove food & 3.1 handle update
  function handleLiClick(id) {

    // 2.2 remove array element
    // const newFoodArray = foods.filter(food => food.id !== id)
    // setFoods(newFoodArray)


    // 3.2 update elements in arrays
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

  // const foodList = foods.map((food) => (
  //   <li key={food.id} onClick={() => handleLiClick(food.id)}>
  //     {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
  //   </li>
  // ));


  // 4.1 set up new state with initial state "All"
  const [filterBy, setFilterBy] = useState("All")

  // 4.2 update <select> when valaue is changed
  function handleFilterChange(event) {
    setFilterBy(event.target.value)
  }

  // 4.3 filter foods to update which items to display
  const foodsToDisplay = foods.filter((food) => {
    if (filterBy === "All") {
      return true
    } else {
      return food.cuisine === filterBy
    }
  })
  console.log(foodsToDisplay)

  // 4.4 use foodsToDisplay to generate <li>s
  const foodList = foodsToDisplay.map((food) => (
    <li key={food.id} onClick={() => handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ))

  return (
    <div>
      <select name="filter" onChange={handleFilterChange}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
