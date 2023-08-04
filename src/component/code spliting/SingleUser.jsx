import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";

const SingleUser = () => {
  const params = useParams();
  console.log(params);
  const [user, setUser] = useState({});
  const [error, setError] = useState(false);
  console.log(user);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${params.userid}`)
      .then((response) => {
        if (response.status !== 200) {
          setError(true);
          return null;
        } else {
          return response.json();
        }
      })
      .then((data) => setUser(data));
  }, [params]);
  return !error ? (
    <>
      <h1>SingleUser</h1>
      <h3> id - {params.userid}</h3>
      <h3>Name - {user?.name}</h3>
      <h3>email - {user?.email}</h3>
    </>
  ) : (
    <Navigate to="/error" />
  );
};

export default SingleUser;
