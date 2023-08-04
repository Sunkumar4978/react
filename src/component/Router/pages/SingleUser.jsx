import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleUser = () => {
  const [user, setUser] = useState({});
  const params = useParams();
  console.log(params)
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${params?.userid}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);
  return (
    <> 
      <h1>SingleUser Page - {params.userid}</h1>
      <h3>Name - {user.name}</h3>
      <h3>Email - {user.email}</h3>
    </>
  );
};

export default SingleUser;
