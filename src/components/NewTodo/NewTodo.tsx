import React, { useState, useRef } from "react";
import { useAppDispatch } from "../../app/hooks";

import { todosActions } from "../../features/todos";
import book from "../../assets/book-solid.svg";
import Todos from "../../models/Todos";

const NewTodo = React.memo(() => {
  const dispatch = useAppDispatch();

  const inputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<boolean>(false);

  const addTodoHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const id = (Math.random() + 1).toString();
    const enteredTodo = inputRef.current!.value;

    if (enteredTodo.trim().length === 0) {
      setError(true);
      return;
    }

    setError(false);

    const newTodo: Todos = {
      id,
      title: enteredTodo,
      isDone: false,
    };

    dispatch(todosActions.addTodo(newTodo));
    inputRef.current!.value = "";
  };

  console.log("NewTodo Rendering");

  return (
    <form
      className="w-full h-32 px-2 bg-white rounded-sm shadow-md mx-auto flex flex-col justify-evenly items-center lg:w-[500px]"
      onSubmit={addTodoHandler}
    >
      <div className="w-full h-[30%] flex">
        <label
          className="flex justify-center items-center bg-primaryBlue w-[15%] h-full rounded-l-sm"
          htmlFor="text"
        >
          <img
            src={book}
            alt="book"
            className="w-1/2 h-1/2 mx-auto filter-white"
          />
        </label>
        <input
          ref={inputRef}
          type="text"
          placeholder="New todo"
          className={`w-[85%] h-full p-2 border rounded-r-sm outline-none block ${
            error ? "border-red-500" : "border-slate-400"
          }`}
        />
      </div>
      <div className="h-[30%] w-full">
        <button
          type="submit"
          className="w-full h-full bg-primaryBlue text-white font-semibold font-sans text-md outline-none rounded-sm cursor-pointer hover:brightness-90"
        >
          Add new task
        </button>
      </div>
    </form>
  );
});

export default NewTodo;
