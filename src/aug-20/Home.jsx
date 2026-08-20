import React from "react";
import FoodDisplay from "../aug-13/FoodDisplay";
import RestaurantDisplay from "../aug-14/RestaurantDisplay";
import MovieAdvertisement from "../aug-14/MovieAdvertisement";

function Home() {
  return (
    <div className="page-layout">
      <main className="food-content">
        <FoodDisplay />
        <RestaurantDisplay />
      </main>

      <aside className="advertisement-area">
        <MovieAdvertisement />
      </aside>
    </div>
  );
}

export default Home;
