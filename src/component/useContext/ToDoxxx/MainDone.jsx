import React from "react";
import { useToDoCustom } from "./MainContext";

const Done = () => {
  const { todos, setTodos } = useToDoCustom();
  return (
    <div>
      <h1>DONE</h1>
      <ul>
        {todos.map(
          (todo) =>
            !todo.done && (
              <li key={todo.id} style={{ listStyle: "none" }}>
                <input
                  type="checkbox"
                  defaultChecked
                  onClick={() =>
                    setTodos(
                      todos.map((e) =>
                        e.id === todo.id ? { ...e, done: true } : e
                      )
                    )
                  }
                />
                <del>{todo.title}</del>
              </li>
            )
        )}
      </ul>
    </div>
  );
};

export default Done;
