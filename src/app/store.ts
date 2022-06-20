import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import todosReducer from "../features/todos";
import isShowEditReducer from "../features/isShowEdit";

export const store = configureStore({
  reducer: {
    isShowEdit: isShowEditReducer,
    todos: todosReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
