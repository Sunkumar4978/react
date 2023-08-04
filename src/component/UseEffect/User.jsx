import React, { useEffect, useState } from "react";

const getUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return await response.json();
};

const Users = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const key = setInterval(() => {
      getUsers().then((data) => setUser(data));
    }, 3000);
    return () => {
      clearInterval(key);
      console.log("return")
    };
  }, []);
  console.log(user);
  return (
    <div>
      <ul>
        {user?.map((d) => (
          <h1 key={d.id}>{d.username}</h1>
        ))}
      </ul>
    </div>
  );
};

export default Users;
