import React from "react";

import pen from "../../assets/pen-solid.svg";
import trash from "../../assets/trash-solid.svg";

const TodoItem: React.FC<{ title: string; id: string }> = (props) => {
  return (
    <li
      id={props.id}
      className="w-full p-3 rounded-sm border-[1px] border-slate-500 mb-4 flex items-center"
    >
      <div className="w-[70%] h-full flex items-center">
        <p className="text-lg font-semibold text-slate-700">{props.title}</p>
      </div>
      <div className="w-[30%] h-full flex justify-between items-center">
        <input type="checkbox" className="w-5 h-5" />
        <img src={pen} alt="pen" className="w-[22%] h-full" />
        <img src={trash} alt="trash" className="w-[22%] h-full" />
      </div>
    </li>
  );
};

export default TodoItem;
