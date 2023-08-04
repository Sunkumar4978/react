import React from "react";
import AddItem from "./MainAdd";
import MainToDo from "./MainToDo";
import Done from "./MainDone";

const MainLayout = () => {
  return (
    <div>
      <h1>MainLayout</h1>
      <div>
        <AddItem />
        <MainToDo />
        <Done />
      </div>
    </div>
  );
};

export default MainLayout;
