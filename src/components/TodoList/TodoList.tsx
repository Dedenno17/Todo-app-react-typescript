import { useState, useEffect } from "react";
import { useAppSelector } from "../../app/hooks";

import Button from "../UI/Button";
import TodoItem from "../TodoItem/TodoItem";
import { Todos } from "../../features/todos";

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
        <Button type="button" onClick={showAllHandler}>
          All
        </Button>
        <Button type="button" onClick={showDoneHandler}>
          Done
        </Button>
        <Button type="button" onClick={showNotDoneYetHandler}>
          Todo
        </Button>
      </div>
      <ul className="w-full pt-4">
        {enteredTodos.map((todo) => (
          <TodoItem key={todo.id} id={todo.id} title={todo.title} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
