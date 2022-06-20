import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

interface isShowEdit {
  value: boolean;
}

const initialStateValue: isShowEdit = {
  value: false,
};

export const showEditSlice = createSlice({
  name: "showEdit",
  initialState: initialStateValue,
  reducers: {
    setShowEdit: (state) => {
      state.value = !state.value;
    },
  },
});

export const showEditActions = showEditSlice.actions;

export const selectShowEdit = (state: RootState) => state.isShowEdit.value;

export default showEditSlice.reducer;
