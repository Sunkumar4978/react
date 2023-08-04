import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import UserList from "../list/UserList";
import SingleUser from "../pages/SingleUser";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/users" element={<UserList />} />
      <Route path="/users/:userid" element={<SingleUser />} />
    </Routes>
  );
};

export default AppRoutes;
