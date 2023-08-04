import React from "react";
import { useUserCustom } from "./UserContextProvider";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { userDetails, Logout } = useUserCustom();
  const navigator = useNavigate();
  return (
    <div>
      <h1>Profile</h1>
      <h3>UserName - {userDetails?.username}</h3>
      <h3>E-Mail - {userDetails?.email}</h3>
      <br />
      <button
        onClick={() => {
          navigator("/home");
          Logout();
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
