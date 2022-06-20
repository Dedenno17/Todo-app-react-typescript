import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

import { showEditActions } from "../../features/isShowEdit";
import { todosActions } from "../../features/todos";
import Modal from "../UI/Modal";
import Button from "../UI/Button";

const EditTodo: React.FC = (props) => {
  const dispatch = useAppDispatch();

  const todoToEdit = useAppSelector((state) => state.isShowEdit.value);
  const [titleToEdit, setTitleToEdit] = useState<string>(todoToEdit.titleTodo);

  const confirmHandler = () => {
    dispatch(
      todosActions.editTodo({ id: todoToEdit.idTodo, newTitle: titleToEdit })
    );
    dispatch(showEditActions.setCloseEdit());
  };

  const cancelHandler = () => {
    dispatch(showEditActions.setCloseEdit());
  };

  return (
    <Modal className="p-3 h-40 flex flex-col justify-evenly items-center">
      <h2 className="text-xl font-semibold font-sans text-slate-700 mb-2">
        Edit Todo
      </h2>
      <div className="w-full h-[35%]">
        <input
          value={titleToEdit}
          onChange={(event) => setTitleToEdit(event.target.value)}
          type="text"
          className="w-full h-8 border-[1px] bg-white border-slate-700 rounded-sm py-3 px-2 outline-none"
        />
      </div>
      <div className="w-full h-[35%] flex justify-end items-center">
        <Button
          type="button"
          onClick={cancelHandler}
          className="w-[30%] py-1 border-[1px] border-primaryBlue bg-white text-primaryBlue"
        >
          Cancel
        </Button>
        <Button
          type="button"
          onClick={confirmHandler}
          className="w-[30%] py-1 bg-primaryBlue ml-3 text-white"
        >
          Confirm
        </Button>
      </div>
    </Modal>
  );
};

export default EditTodo;
