import React, { createContext, useContext, useState } from "react";
import { v4 as uuid } from "uuid";

const initial = [
  { id: uuid(), title: "Pay Bills", done: true },
  { id: uuid(), title: "See the doctor", done: true },
  { id: uuid(), title: "Go to home", done: false },
  { id: uuid(), title: "Go to office", done: true },
];
export const MyUpdateToDo = createContext();

const MainContextToDo = ({ children }) => {
  const [todos, setTodos] = useState(initial);
  const [addTodo, setAddTodo] = useState("");
  const [edit, setEdit] = useState("");

  return (
    <MyUpdateToDo.Provider
      value={{ todos, setTodos, addTodo, setAddTodo, edit, setEdit }}
    >
      {children}
    </MyUpdateToDo.Provider>
  );
};

export default MainContextToDo;

export const useMyUpdateCustomToDo = () => useContext(MyUpdateToDo);
