import React from "react";
import { useCustomContext } from "./Context";
import { Link, useNavigate } from "react-router-dom";

const LogInPage = () => {
  const { person, HandleChange } = useCustomContext();

  const navigator = useNavigate();

  return (
    <div>
      <h1>LogInPage</h1>
      <div>
        <label htmlFor="name">name{""}</label>
        <input
          type="text"
          name="name"
          value={person.name}
          onChange={(e) => HandleChange(e)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={person.email}
          onChange={(e) => HandleChange(e)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={person.password}
          onChange={(e) => HandleChange(e)}
        />
      </div>
      <button onClick={() => navigator("/profile")}> profile</button>
    </div>
  );
};

export default LogInPage;
