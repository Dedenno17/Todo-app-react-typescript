import React from "react";

import NewTodo from "./components/NewTodo/NewTodo";

function App() {
  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-sans font-bold text-slate-700 text-center mb-4">
        Todo App
      </h1>
      <NewTodo />
    </div>
  );
}

export default App;
