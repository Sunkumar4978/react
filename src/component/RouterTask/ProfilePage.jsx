import React from "react";
import { useCustomContext } from "./Context";
import { Link, useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const { person, setPerson } = useCustomContext();
  const navigator = useNavigate();
  return (
    <>
      <h3>Name-{person.name}</h3>
      <h3>Email-{person.email}</h3>
      <h3>Password-{person.password}</h3>
      <button
        onClick={() => {
          setPerson("");
          navigator("/login");
        }}
      >
        Logout
      </button>
    </>
  );
};

export default ProfilePage;
