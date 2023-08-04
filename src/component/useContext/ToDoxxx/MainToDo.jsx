import React, { useEffect } from "react";
import { useToDoCustom } from "./MainContext";

const MainToDo = () => {
  const { todos, setTodos, edit, setEdit, singleTodo, setSingleTodo } =
    useToDoCustom();
  useEffect(() => {
    if (edit) {
      setSingleTodo(edit.title);
    }
    console.log(edit);
  }, [edit]);
  return (
    <div>
      <h1>TODO</h1>
      <ul>
        {todos.map(
          (todo) =>
            todo.done && (
              <li key={todo.id} style={{ listStyle: "none" }}>
                <input
                  type="checkbox"
                  onClick={() =>
                    setTodos(
                      todos.map((e) =>
                        e.id === todo.id ? { ...e, done: false } : e
                      )
                    )
                  }
                />
                {todo.title}
                <div>
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
