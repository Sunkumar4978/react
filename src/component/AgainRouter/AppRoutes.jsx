import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./about";
import NotFound from "./NotFound";
import CollectionOfUsers from "./CollectionOfUsers";
import SingleUser from "./SingleUser";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/users" element={<CollectionOfUsers />}>
        <Route path="/users/:userid" element={<SingleUser />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
