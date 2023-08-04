import React, { useState } from "react";
import { useUserContext } from "./Context";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({ username: "", password: "" });
  const { Login } = useUserContext();
  const navigator = useNavigate();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        Login(user);
        setUser({ username: "", password: "" });
        navigator("/profile");
      }}
    >
      <h1>LogIn Page</h1>
      <br />
      <label htmlFor="username">UserName</label>
      <input
        type="text"
        id="username"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />
      <br />
      <br />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="Password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <br />
      <br />
      <input type="submit" value="login" />
    </form>
  );
};

export default Login;
