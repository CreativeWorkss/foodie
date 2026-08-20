import React from "react";
import { Link } from "react-router-dom";
import "./FoodDisplay.css";
import { foodItems } from "../aug-14/foodbasket";

function FoodDisplay() {
  const foodList = foodItems.map((food) => {
    return (
      <Link to={`/food/${food.id}`} className="food-link">
        <div className="food-card">
          <img src={food.image} alt={food.name} />

          <h3>{food.name}</h3>
        </div>
      </Link>
    );
  });

  return (
    <div className="food-display">
      <h2>Please pick the food of your choice?</h2>

      <div className="food-list">{foodList}</div>
    </div>
  );
}

export default FoodDisplay;
