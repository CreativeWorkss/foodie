import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import FoodDetails from "./FoodDetails";

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login */}
        <Route path="/" element={<Login />} />

        {/* Home */}
        <Route path="/home" element={<Home />} />

        <Route path="/food/:id" element={<FoodDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
