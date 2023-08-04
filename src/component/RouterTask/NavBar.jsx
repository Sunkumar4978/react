import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav style={{ display: "flex", justifyContent: "space-evenly" }}>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/about"}>About</NavLink>
      <NavLink to={"/login"}>Login</NavLink>
      <NavLink to={"/profile"}>Profile</NavLink>
    </nav>
  );
};

export default NavBar;
