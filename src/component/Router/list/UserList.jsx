import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UserList = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setList(data));
  }, []);
  console.log(list);
  return (
    <div>
      <h1>User List</h1>
      <ul>
        {list?.map((user) => (
          <h5 key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </h5>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
