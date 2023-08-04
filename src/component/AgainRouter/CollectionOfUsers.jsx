import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

const CollectionOfUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <h1>users List</h1>
      <div style={{ display: "flex" }}>
        <ul>
          {users?.map((list) => (
            <h5 key={list.id}>
              <Link to={`/users/${list.id}`}>{list.name}</Link>
            </h5>
          ))}
        </ul>
        <Outlet />
      </div>
    </div>
  );
};

export default CollectionOfUsers;
