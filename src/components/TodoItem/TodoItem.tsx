import React, { ChangeEvent } from "react";
import { useAppDispatch } from "../../app/hooks";

import { todosActions } from "../../features/todos";
import { showEditActions } from "../../features/isShowEdit";
import pen from "../../assets/pen-solid.svg";
import trash from "../../assets/trash-solid.svg";
import check from "../../assets/check-solid.svg";

const TodoItem: React.FC<{ title: string; id: string; isDone: boolean }> = (
  props
) => {
  const dispatch = useAppDispatch();

  const removeTodoHandler = () => {
    dispatch(todosActions.removeTodo(props.id));
  };

  const editTodoHandler = () => {
    dispatch(
      showEditActions.setShowEdit({
        idTodo: props.id,
        titleTodo: props.title,
        isShow: true,
      })
    );
  };

  const checkHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      dispatch(todosActions.checkTodo(props.id));
    }
  };

  return (
    <li
      id={props.id}
      className="w-full p-3 rounded-sm border-[1px] border-slate-500 mb-4 flex items-center"
    >
      <div className="w-[70%] h-full flex items-center">
        <p
          className={`text-lg font-semibold ${
            props.isDone ? "text-red-500" : "text-slate-700"
          }`}
        >
          {props.title}
        </p>
      </div>
      <div className="w-[30%] h-full flex justify-between items-center">
        <div
          className={`w-5 h-5 relative border-[1px] ${
            props.isDone ? "border-green-500" : "border-slate-700"
          } `}
        >
          <div className="w-full h-full ">
            <img
              src={check}
              alt="check"
              className={`w-full h-full filter-green ${
                props.isDone ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
          <input
            onChange={checkHandler}
            type="checkbox"
            className="w-5 h-5 absolute top-0 left-0 opacity-0"
          />
        </div>
        <img
          src={pen}
          alt="pen"
          className={`w-[22%] h-full ${
            props.isDone ? "filter-grey pointer-events-none" : "filter-orange"
          } `}
          onClick={editTodoHandler}
        />
        <img
          src={trash}
          alt="trash"
          className="w-[22%] h-full filter-red"
          onClick={removeTodoHandler}
        />
      </div>
    </li>
  );
};

export default TodoItem;
