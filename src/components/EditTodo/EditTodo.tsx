import React from "react";

import Modal from "../UI/Modal";

const EditTodo: React.FC = (props) => {
  return (
    <Modal className="p-3 h-40 flex flex-col justify-evenly items-center">
      <h2 className="text-xl font-semibold font-sans text-slate-700 mb-2">
        Edit Todo
      </h2>
      <div className="w-full h-[35%]">
        <input
          type="text"
          className="w-full h-7 border-[1px] bg-white border-slate-700 rounded-sm py-3 px-5"
        />
      </div>
      <div className="w-full h-[35%] flex justify-end items-center">
        <button type="button">Cancel</button>
        <button type="button">Confirm</button>
      </div>
    </Modal>
  );
};

export default EditTodo;
