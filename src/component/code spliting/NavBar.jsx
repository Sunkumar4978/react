import React from "react";
import { NavLink } from "react-router-dom";

const Links = [
  "home",
  "about",
  "login",
  "profile",
  "products",
  "users",
  // "singleUser",
];

const NavBar = () => {
  return (
    <nav>
      {Links.map((link) => (
        <NavLink to={`/${link}`} key={link} style={{ marginRight: "5rem" }}>
          {link}
        </NavLink>
      ))}
    </nav>
  );
};

export default NavBar;
