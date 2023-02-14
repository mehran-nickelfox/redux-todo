import { createSlice } from "@reduxjs/toolkit";

const initialValues = [];

const todoSlice = createSlice({
  name: `todos`,
  initialState: initialValues,
  reducers: {
    addToDo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action?.payload?.title,
        completed: false,
      };
      state.push(newTodo);
    },
    checkTodo: (state, action) => {
      const stateIndex = state.findIndex(
        (todo) => todo?.id === action?.payload?.id
      );
      state[stateIndex].completed = action.payload.completed;
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo?.id !== action?.payload?.id);
    },
  },
});
export const { addToDo, checkTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
