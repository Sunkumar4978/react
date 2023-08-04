import React, { useEffect, useState } from "react";
import { Link, Navigate} from "react-router-dom";

const Users = () => {
  const [userList, setUserList] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (response.status !== 200) {
          setError(true);
          return null;
        } else {
          return response.json();
        }
      })
      .then((data) => setUserList(data));
  }, []);

  return !error ? (
    <>
      <h1>User page</h1>
      {userList?.map((user) => (
        <Link to={`/users/${user.id}`} key={user.id}>
          <h3>{user.name}</h3>
        </Link>
      ))}
    </>
  ) : (
    <Navigate to="/error" />
  );
};

export default Users;
