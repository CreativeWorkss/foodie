import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import "./FoodDetails.css";
import { foodItems } from "../aug-14/foodbasket";

function FoodDetails() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);

  const selectedFood = foodItems.find((food) => food.id === Number(id));

  if (!selectedFood) {
    return (
      <div>
        <h2>Food not found</h2>

        <button onClick={() => navigate("/home")}>Go Home</button>
      </div>
    );
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const totalPrice = selectedFood.price * quantity;

  const placeOrder = () => {
    alert(
      `Order placed successfully!

Food: ${selectedFood.name}

Quantity: ${quantity}

Total Price: ₹${totalPrice}`,
    );
  };

  return (
    <div className="food-details-page">
      <button className="back-button" onClick={() => navigate("/home")}>
        ← Back to Home
      </button>

      <div className="food-details-card">
        <div className="food-details-image">
          <img src={selectedFood.image} alt={selectedFood.name} />
        </div>

        <div className="food-details-content">
          <span className="food-badge">Popular Choice</span>

          <h1>{selectedFood.name}</h1>

          <div className="rating">⭐ {selectedFood.rating}</div>

          <p className="food-description">{selectedFood.description}</p>

          <h2 className="food-price">₹{selectedFood.price}</h2>

          <div className="quantity-section">
            <p>Quantity</p>

            <div className="quantity-control">
              <button onClick={decreaseQuantity}>-</button>

              <span>{quantity}</span>

              <button onClick={increaseQuantity}>+</button>
            </div>
          </div>

          <div className="total-section">
            <span>Total</span>

            <strong>₹{totalPrice}</strong>
          </div>

          <button className="order-button" onClick={placeOrder}>
            🛒 Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default FoodDetails;
