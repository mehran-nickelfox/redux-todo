import React from "react";
import "./Components.css";
import { useDispatch } from "react-redux";
import { checkTodo, deleteTodo } from "../redux/todoSlice";

const TodoItem = (props) => {
  const { id, title, isCompleted } = props;
  const dispatch = useDispatch();
  const checkItem = (id) => {
    dispatch(
      checkTodo({
        id,
        completed: !isCompleted,
      })
    );
  };
  const handleTodoDelete = (id) => {
    dispatch(
      deleteTodo({
        id,
      })
    );
  };
  return (
    <li className="List-Item">
      <div className="items">
        <span>
          <input
            type="checkbox"
            onChange={() => checkItem(id)}
            className=""
            checked={isCompleted}
          />
          {title}
        </span>
        <button onClick={handleTodoDelete.bind(null, id)}>Delete</button>
      </div>
    </li>
  );
};

export default TodoItem;
