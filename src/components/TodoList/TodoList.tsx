import { useState, useEffect } from "react";
import { useAppSelector } from "../../app/hooks";

import Button from "../UI/Button";
import TodoItem from "../TodoItem/TodoItem";
import Todos from "../../models/Todos";

function TodoList() {
  const todos = useAppSelector((state) => state.todos.value);

  const [enteredTodos, setEnteredTodos] = useState<Todos[]>(todos);

  useEffect(() => {
    setEnteredTodos(todos);
  }, [todos]);

  const showAllHandler = () => {
    setEnteredTodos(todos);
  };

  const showDoneHandler = () => {
    const newTodos: Todos[] = enteredTodos.filter(
      (todo) => todo.isDone === true
    );
    setEnteredTodos(newTodos);
  };

  const showNotDoneYetHandler = () => {
    const newTodos: Todos[] = enteredTodos.filter(
      (todo) => todo.isDone === false
    );
    setEnteredTodos(newTodos);
  };

  return (
    <div className="w-full mt-5 p-2">
      <h2 className="text-center text-xl font-bold text-slate-700 font-sans">
        TodoList
      </h2>
      <div className="flex justify-between items-center mt-3">
        <Button
          type="button"
          onClick={showAllHandler}
          className="w-[30%] py-2 bg-primaryBlue text-white"
        >
          All
        </Button>
        <Button
          type="button"
          onClick={showDoneHandler}
          className="w-[30%] py-2 bg-primaryBlue text-white"
        >
          Done
        </Button>
        <Button
          type="button"
          onClick={showNotDoneYetHandler}
          className="w-[30%] py-2 bg-primaryBlue text-white"
        >
          Todo
        </Button>
      </div>
      <ul className="w-full pt-4">
        {enteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            isDone={todo.isDone}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
