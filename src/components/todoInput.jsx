import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "../redux/todoSlice";
const TodoForm = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");
  const handleTodoValue = (e) => {
    const { value } = e.target;
    setTodo(value);
  };
  const handleAddItem = (e) => {
    e.preventDefault();
    dispatch(
      addToDo({
        title: todo,
      })
    );
    console.log(todo);
  };
  return (
    <>
      <form onSubmit={handleAddItem}>
        <input
          type="text"
          placeholder="Add Todo"
          value={todo}
          onChange={handleTodoValue}
        />
        <button type="submit"> Add Item</button>
      </form>
    </>
  );
};

export default TodoForm;
