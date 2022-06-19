import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

interface todos {
  id: string;
  title: string;
  isDone: boolean;
}

interface TodosState {
  value: todos[];
}

const initialStateValue: TodosState = {
  value: [],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState: initialStateValue,
  reducers: {
    addTodo: (state, action: PayloadAction<todos>) => {
      const newState: todos[] = [...state.value];
      newState.push(action.payload);
      state.value = newState;
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      const newState: todos[] = state.value.filter(
        (item) => item.id !== action.payload
      );
      state.value = newState;
    },
  },
});

export const todosActions = todosSlice.actions;

export const selectTod = (state: RootState) => state.todos.value;

export default todosSlice.reducer;
