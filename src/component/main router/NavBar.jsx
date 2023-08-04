import React from "react";
import { NavLink } from "react-router-dom";

const links = ["home", "logIn", "profile", "products"];
const NavBar = () => {
  return (
    <nav>
      {links.map((link) => (
        <NavLink to={`/${link}`} key={link} style={{ marginLeft: "6rem" }}>
          {link}
        </NavLink>
      ))}
    </nav>
  );
};

export default NavBar;
