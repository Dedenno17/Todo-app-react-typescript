import Button from "../UI/Button";

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
      <ul></ul>
    </div>
  );
}

export default TodoList;
