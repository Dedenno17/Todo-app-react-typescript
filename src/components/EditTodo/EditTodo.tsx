import React from "react";

import Modal from "../UI/Modal";
import Button from "../UI/Button";

const EditTodo: React.FC = (props) => {
  return (
    <Modal className="p-3 h-40 flex flex-col justify-evenly items-center">
      <h2 className="text-xl font-semibold font-sans text-slate-700 mb-2">
        Edit Todo
      </h2>
      <div className="w-full h-[35%]">
        <input
          type="text"
          className="w-full h-8 border-[1px] bg-white border-slate-700 rounded-sm py-3 px-5"
        />
      </div>
      <div className="w-full h-[35%] flex justify-end items-center">
        <Button
          type="button"
          onClick={() => {}}
          className="w-[30%] py-1 border-[1px] border-primaryBlue bg-white text-primaryBlue"
        >
          Cancel
        </Button>
        <Button
          type="button"
          onClick={() => {}}
          className="w-[30%] py-1 bg-primaryBlue ml-3 text-white"
        >
          Confirm
        </Button>
      </div>
    </Modal>
  );
};

export default EditTodo;
