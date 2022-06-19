import React from "react";

import pen from "../../assets/pen-solid.svg";
import trash from "../../assets/trash-solid.svg";

const TodoItem: React.FC = (props) => {
  return (
    <li>
      <div>
        <p></p>
      </div>
      <div>
        <input type="checkbox" />
        <img src={pen} alt="" />
        <img src={trash} alt="" />
      </div>
    </li>
  );
};

export default TodoItem;
