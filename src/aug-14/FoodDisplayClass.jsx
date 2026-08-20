import React, { Component } from "react";
import "./FoodDisplayClass.css";
import { foodItems } from "./foodbasket";

class FoodDisplayClass extends Component {
  render() {
    const foodList = foodItems.map((food) => {
      return (
        <div className="food-card">
          <img className="food-image" src={food.image} />
          <h3 className="food-name">{food.name}</h3>
        </div>
      );
    });
    return (
      <div className="food-section">
        <h2 className="food-heading">Please pick the food of your choice?</h2>

        <div className="food-container">{foodList}</div>
      </div>
    );
  }
}

export default FoodDisplayClass;
