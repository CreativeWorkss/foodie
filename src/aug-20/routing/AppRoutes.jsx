import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OnlyOnce from "../../aug-19/OnlyOnce";
import Dependency from "../../aug-19/Dependency";
import CheckRoute from "./CheckRoute";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CheckRoute />} />
        <Route path="/one" element={<OnlyOnce />} />
        <Route path="/two" element={<Dependency />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
