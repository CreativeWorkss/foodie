import React from "react";
import "./RestaurantDisplay.css";

function RestaurantDisplay() {
  const restaurants = [
    {
      id: 1,
      name: "Meghana Foods",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500",
      cuisine: "Biryani, North Indian",
      rating: 4.5,
      deliveryTime: "30-35 mins",
    },
    {
      id: 2,
      name: "Pizza Hut",
      image:
        "https://images.unsplash.com/photo-1579751626657-72bc17010498?w=500",
      cuisine: "Pizza, Italian",
      rating: 4.3,
      deliveryTime: "25-30 mins",
    },
    {
      id: 3,
      name: "Burger King",
      image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=500",
      cuisine: "Burger, Fast Food",
      rating: 4.2,
      deliveryTime: "20-25 mins",
    },
    {
      id: 4,
      name: "Empire Restaurant",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500",
      cuisine: "Biryani, Kebabs",
      rating: 4.4,
      deliveryTime: "35-40 mins",
    },
  ];

  const restaurantList = restaurants.map((restaurant) => {
    return (
      <div className="restaurant-card" key={restaurant.id}>
        <img src={restaurant.image} alt={restaurant.name} />

        <div className="restaurant-details">
          <h3>{restaurant.name}</h3>

          <p className="restaurant-cuisine">{restaurant.cuisine}</p>

          <div className="restaurant-info">
            <span className="restaurant-rating">⭐ {restaurant.rating}</span>

            <span className="restaurant-time">{restaurant.deliveryTime}</span>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="restaurant-section">
      <h2>Restaurants near you</h2>

      <div className="restaurant-list">{restaurantList}</div>
    </div>
  );
}

export default RestaurantDisplay;
