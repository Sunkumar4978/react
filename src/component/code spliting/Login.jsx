import React, { useState } from "react";
import { useUserCustom } from "./UserContextProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { Login } = useUserCustom();
  const navigator = useNavigate();
  const [list, setList] = useState({ username: "", password: "" });
  return (
    <div>
      <h1>Login Page</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          Login(list);
          navigator("/profile");
          console.log(list);
        }}
      >
        <label htmlFor="username">UserName</label>
        <input
          type="text"
          id="username"
          value={list.username}
          onChange={(e) => setList({ ...list, username: e.target.value })}
        />
        <br />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={list.password}
          onChange={(e) => setList({ ...list, password: e.target.value })}
        />
        <br />
        <br />
        <input type="submit" value={"login"} />
      </form>
    </div>
  );
};

export default Login;
