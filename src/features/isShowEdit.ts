import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

interface toEdit {
  idTodo: string;
  titleTodo: string;
  isShow: boolean;
}

interface isShowEdit {
  value: toEdit;
}

const initialStateValue: isShowEdit = {
  value: {
    idTodo: "",
    titleTodo: "",
    isShow: false,
  },
};

export const showEditSlice = createSlice({
  name: "showEdit",
  initialState: initialStateValue,
  reducers: {
    setShowEdit: (state, action: PayloadAction<toEdit>) => {
      state.value.idTodo = action.payload.idTodo;
      state.value.titleTodo = action.payload.titleTodo;
      state.value.isShow = action.payload.isShow;
    },
    setCloseEdit: (state) => {
      state.value.isShow = false;
    },
  },
});

export const showEditActions = showEditSlice.actions;

export const selectShowEdit = (state: RootState) => state.isShowEdit.value;

export default showEditSlice.reducer;
