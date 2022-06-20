import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

import Todos from "../models/Todos";

interface TodosState {
  value: Todos[];
}

const initialStateValue: TodosState = {
  value: [],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState: initialStateValue,
  reducers: {
    addTodo: (state, action: PayloadAction<Todos>) => {
      const newState: Todos[] = [...state.value];
      newState.push(action.payload);
      state.value = newState;
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      const newState: Todos[] = state.value.filter(
        (item) => item.id !== action.payload
      );
      state.value = newState;
    },
  },
});

export const todosActions = todosSlice.actions;

export const selectTodo = (state: RootState) => state.todos.value;

export default todosSlice.reducer;
