import React from "react";

function FoodItem(props) {
  return (
    <div className="food-item">
      <img src={props.image} alt={props.name} />
      <p>{props.name}</p>
    </div>
  );
}

export default FoodItem;
