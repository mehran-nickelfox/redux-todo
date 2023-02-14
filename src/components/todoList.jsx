import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import "./Components.css";
const TodoList = () => {
  const todos = useSelector((state) => state?.todos);
  const completedTodo = () => {
    const x = todos.filter((todo) => todo?.completed === true);
    return (
      <>
        <div>
          <h3>{x?.length}</h3>
        </div>
      </>
    );
  };
  const getTodos = (list) => {
    return (
      <div className="List">
        <ul className="List-Wrapper">
          {list.map((todo) => (
            <TodoItem
              key={todo?.id}
              id={todo?.id}
              title={todo?.title}
              isCompleted={todo?.completed}
            />
          ))}
        </ul>
      </div>
    );
  };
  return (
    <>
      {todos?.length > 0 ? getTodos(todos) : "No Items in List"}
      {completedTodo()}
    </>
  );
};

export default TodoList;
