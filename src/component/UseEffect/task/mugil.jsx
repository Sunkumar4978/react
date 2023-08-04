import React, { useEffect, useState } from "react";

const Mukil = () => {
  const [list, setList] = useState();
  useEffect(() => {
    fetch()
      .then((response) => response.json())
      .then((data) => setList(data));
  }, [list]);
  return <div>Mukil</div>;
};

export default Mukil;
