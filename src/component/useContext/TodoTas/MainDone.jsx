import React from "react";
import { useMyUpdateCustomToDo } from "./MainContext";

const MainDone = () => {
  const { todos, setTodos } = useMyUpdateCustomToDo();
  return (
    <div>
      <div>
        <h3>COMPLETED</h3>
      </div>
      <ul>
        {todos.map(
          (todo) =>
            !todo.done && (
              <li key={todo.id}>
                <input
                  type="checkbox"
                  defaultChecked
                  onClick={() =>
                    setTodos(
                      todos.map((data) =>
                        data.id === todo.id ? { ...data, done: !false } : data
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

export default MainDone;
