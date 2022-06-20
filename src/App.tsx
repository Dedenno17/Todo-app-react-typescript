import React from "react";
import { useAppSelector } from "./app/hooks";
import EditTodo from "./components/EditTodo/EditTodo";

import NewTodo from "./components/NewTodo/NewTodo";
import TodoList from "./components/TodoList/TodoList";

function App() {
  const isShowEdit = useAppSelector((state) => state.isShowEdit.value);

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-sans font-bold text-slate-700 text-center mb-4">
        Todo App
      </h1>
      <NewTodo />
      <TodoList />
      {isShowEdit.isShow && <EditTodo />}
    </div>
  );
}

export default App;
