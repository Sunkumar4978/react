import React, { useEffect } from "react";
import MainToDo from "./MainToDo";
import MainDone from "./MainDone";
import { useMyUpdateCustomToDo } from "./MainContext";
import { v4 as uuid } from "uuid";
import "./Single.css";

const MainLayout = () => {
  const { todos, setTodos, addTodo, setAddTodo, edit, setEdit } =
    useMyUpdateCustomToDo();
  useEffect(() => {
    console.log(setAddTodo);
  }, [todos]);
  return (
    <div className="main-container">
      <div className="container">
        <h1 className="mar">TODO LIST</h1>
        <div className="parent">
          <h3 className="base">ADD ITEM</h3>
          <div className="child">
            <input
              className="inp"
              type="text"
              value={addTodo}
              onChange={(e) => setAddTodo(e.target.value)}
            />
            <button
              className="btn"
              onClick={() => {
                if (addTodo.length === 0) return;
                if (edit) {
                  setTodos(
                    todos.map((d) =>
                      d.id === edit.id ? { ...d, title: addTodo } : d
                    )
                  );
                  setEdit("");
                  setAddTodo("");
                } else {
                  setTodos([
                    ...todos,
                    { id: uuid(), title: addTodo, done: true },
                  ]);
                  setAddTodo("");
                }
              }}
            >
              Add
            </button>
          </div>
          <MainToDo />
          <MainDone />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
