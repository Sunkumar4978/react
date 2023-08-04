import { useUserCustom } from "./UserContextProvider";
import { Navigate } from "react-router-dom";

// const allowedUsers = [
//   { username: "Bret", email: "Sincere@april.biz" },
//   { username: "Antonette", email: "Shanna@melissa.tv" },
//   { username: "Samantha", email: "Nathan@yesenia.net" },
// ];

import React from "react";

const Product = () => {
  const { userDetails } = useUserCustom();
  const HandleUser = ({ userDetails }) => {
    return (
      <div>
        <h1>Product Page</h1>
        <h3>user - {userDetails.username}</h3>
      </div>
    );
  };
  if (userDetails) {
    const { username, email } = userDetails;
    if (
      (username === "Bret" && email === "Sincere@april.biz") ||
      (username === "Antonette" && email === "Shanna@melissa.tv") ||
      (username === "Samantha" && email === "Nathan@yesenia.net")
    ) {
      return <HandleUser userDetails={userDetails} />;
    } else {
      return <Navigate to={"/home"} />;
    }
  } else {
    return <Navigate to={"/home"} />;
  }
};

export default Product;
