import React from "react";
import { Route, Routes } from "react-router-dom";
import LogInPage from "./LogInPage";
import Home from "./Home";
import About from "./About";
import ProfilePage from "./ProfilePage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<LogInPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
};

export default AppRoutes;
