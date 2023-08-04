import React from "react";
import { useUserContext } from "./Context";
import { Navigate, useNavigate } from "react-router-dom";

const Profile = () => {
  const { userDetails, Logout } = useUserContext();
  const navigator = useNavigate();
  if (!userDetails) {
    return <Navigate to={"/login"} />;
  }
  return (
    <div>
      <h1>Profile</h1>
      <h3>Name-{userDetails?.username}</h3>
      <h3>password-{userDetails?.password}</h3>
      <button
        onClick={() => {
          Logout();
          navigator("/home");
        }}
      >
        logout
      </button>
    </div>
  );
};

export default Profile;
