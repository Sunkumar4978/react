import React, { useContext, useEffect, useState } from "react";

const CountFn = () => {
  const [resource, setResource] = useState("resource");

  useEffect(() => {
    console.log("render");
    fetch(`https://jsonplaceholder.typicode.com/${resource}`)
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, [resource]);
  return (
    <div>
      <button onClick={() => setResource("posts")}>posts</button>
      <button onClick={() => setResource("comments")}>comments</button>
      <button onClick={() => setResource("albums")}>albums</button>
      <button onClick={() => setResource("users")}>users</button>
      <h1>{resource}</h1>
    </div>
  );
};

export default CountFn;


// export const usedata=() => useContext(datacontext)