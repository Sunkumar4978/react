import React from "react";
import { useUserCustom } from "./UserContextProvider";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigator = useNavigate();
  const { details, Logout } = useUserCustom();
  return (
    <div>
      <h1>profile page</h1>
      <h3>{details?.username}</h3>
      <h3>{details?.password}</h3>
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
