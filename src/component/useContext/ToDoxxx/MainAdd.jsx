import React from "react";
import { useToDoCustom } from "./MainContext";
import { v4 as uuid } from "uuid";

const AddItem = () => {
  const { todos, setTodos, singleTodo, setSingleTodo, edit, setEdit } =
    useToDoCustom();

  return (
    <div>
      <h1>ADD ITEM</h1>
      <input
        type="text"
        value={singleTodo}
        placeholder="Add new task"
        onChange={(e) => setSingleTodo(e.target.value)}
      />
      <button
        onClick={() => {
          if (singleTodo.length === 0) return;
          if (edit) {
            setTodos(
              todos.map((d) =>
                d.id === edit.id ? { ...d, title: singleTodo } : d
              )
            );
            setEdit("");
            setSingleTodo("");
          } else
            setTodos([...todos, { id: uuid(), title: singleTodo, done: true }]);
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddItem;
