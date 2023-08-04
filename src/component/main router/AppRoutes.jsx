import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Profile from "./Profile";
import Products from "./Products";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/Profile" element={<Profile />}></Route>
      <Route path="/Products" element={<Products />}></Route>
    </Routes>
  );
};
export default AppRoutes;
