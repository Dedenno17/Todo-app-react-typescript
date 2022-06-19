class Todos {
  id: string;
  title: string;
  isDone: boolean;

  constructor(todoTitle: string, todoDone: boolean) {
    this.id = (Math.random() + 1).toString();
    this.title = todoTitle;
    this.isDone = todoDone;
  }
}

export default Todos;
