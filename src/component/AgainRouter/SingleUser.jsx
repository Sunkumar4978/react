import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleUser = () => {
  const [list, setList] = useState({});
  const params = useParams();
  console.log(list);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${params?.userid}`)
      .then((response) => response.json())
      .then((data) => setList(data));
  }, [params.userid]);
  //   useEffect(() => {
  //     console.log(list?.name);
  //   }, [list]);
  return (
    <div>
      <h1>SingleUser</h1>
      <h1>SingleUser Page - {params?.userid}</h1>
      <h3>Name - {list.name}</h3>
      <h3>Email - {list.email}</h3>
    </div>
  );
};

export default SingleUser;
