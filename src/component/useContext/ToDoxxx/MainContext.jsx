import React, { createContext, useContext, useState } from "react";
import { v4 as uuid } from "uuid";
const initial = [
  { id: uuid(), title: "Pay Bills", done: true },
  { id: uuid(), title: "See the Doctor", done: true },
  { id: uuid(), title: "Go to trip", done: false },
  { id: uuid(), title: "Go to office", done: true },
];

export const MyToDoContext = createContext();

const MainContext = ({ children }) => {
  const [todos, setTodos] = useState(initial);
  const [singleTodo, setSingleTodo] = useState("");
  const [edit, setEdit] = useState("");

  return (
    <MyToDoContext.Provider
      value={{ todos, setTodos, singleTodo, setSingleTodo, edit, setEdit }}
    >
      {children}
    </MyToDoContext.Provider>
  );
};

export default MainContext;

export const useToDoCustom = () => useContext(MyToDoContext);
