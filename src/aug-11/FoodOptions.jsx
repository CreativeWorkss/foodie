import FoodItem from "./FoodItem";
import "./FoodOptions.css";

function FoodOptions() {
  const foodItems = [
    {
      name: "Desserts",
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500",
    },
    {
      name: "South Indian",
      image:
        "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=500",
    },
    {
      name: "Cake",
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500",
    },
    {
      name: "Biryani",
      image:
        "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=500",
    },
    {
      name: "Pizza",
      image:
        "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500",
    },
    {
      name: "Noodles",
      image:
        "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500",
    },
    {
      name: "Dosa",
      image:
        "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=500",
    },
    {
      name: "Momo",
      image:
        "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?w=500",
    },
    {
      name: "Salad",
      image:
        "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500",
    },
    {
      name: "Shawarma",
      image:
        "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=500",
    },
  ];

  return (
    <div className="food-section">
      <h2>Order our best food options</h2>

      <div className="food-container">
        {foodItems.map((food) => (
          <FoodItem name={food.name} image={food.image} />
        ))}
      </div>
    </div>
  );
}

export default FoodOptions;
