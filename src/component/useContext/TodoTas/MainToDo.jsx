import React, { useEffect } from "react";
import { useMyUpdateCustomToDo } from "./MainContext";

const MainToDo = () => {
  const { todos, setTodos, addTodo, setAddTodo, edit, setEdit } =
    useMyUpdateCustomToDo();
  useEffect(() => {
    if (edit) setAddTodo(edit.title);
  }, [edit]);

  return (
    <div>
      <div className="base">
        <h3>TODO</h3>
      </div>
      <ul className="todotit">
        {todos.map(
          (todo) =>
            todo.done && (
              <li key={todo.id} className="del">
                <input
                  type="checkbox"
                  onClick={() =>
                    setTodos(
                      todos.map((data) =>
                        data.id === todo.id ? { ...data, done: !true } : data
                      )
                    )
                  }
                />
                {todo.title}
                <div className="ed">
                  <button onClick={() => setEdit(todo)}>Edit</button>
                  <button
                    onClick={() =>
                      setTodos(todos.filter((d) => d.id !== todo.id))
                    }
                  >
                    Delete
                  </button>
                </div>
              </li>
            )
        )}
      </ul>
    </div>
  );
};

export default MainToDo;
