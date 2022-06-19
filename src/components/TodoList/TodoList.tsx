import Button from "../UI/Button";
import TodoItem from "../TodoItem/TodoItem";

interface todo {
  id: string;
  title: string;
}

let todos: todo[];

todos = [
  {
    id: (Math.random() + 1).toString(),
    title: "Learn React",
  },
  {
    id: (Math.random() + 1).toString(),
    title: "Learn TypeScript",
  },
];

function TodoList() {
  return (
    <div className="w-full mt-5 p-2">
      <h2 className="text-center text-xl font-bold text-slate-700 font-sans">
        TodoList
      </h2>
      <div className="flex justify-between items-center mt-3">
        <Button type="button" onClick={() => {}}>
          All
        </Button>
        <Button type="button" onClick={() => {}}>
          Done
        </Button>
        <Button type="button" onClick={() => {}}>
          Todo
        </Button>
      </div>
      <ul className="w-full pt-4">
        {todos.map((todo) => (
          <TodoItem key={todo.id} id={todo.id} title={todo.title} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
