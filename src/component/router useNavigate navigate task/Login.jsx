import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserCustom } from "./UserContextProvider";

const Login = () => {
  const [user, setUser] = useState({ username: "", email: "" });
  const navigator = useNavigate();
  const { Login } = useUserCustom();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setUser({ username: "", email: "" });
        navigator("/profile");
        Login(user);
      }}
    >
      <h1>Login Page</h1>
      <br />
      <label htmlFor="usernme">UserName</label>
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
        id="password"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <br />
      <br />
      <input type="submit" value="login" />
    </form>
  );
};

export default Login;
