import book from "../../assets/book-solid.svg";

function NewTodo() {
  return (
    <form className="w-full h-32 px-2 bg-white rounded-sm shadow-md mx-auto flex flex-col justify-evenly items-center">
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
          type="text"
          placeholder="New todo"
          className="w-[85%] h-full p-2 border border-slate-400 rounded-r-sm outline-none block"
        />
      </div>
      <div className="h-[30%] w-full">
        <button
          type="submit"
          className="w-full h-full bg-primaryBlue text-white font-semibold font-sans text-md outline-none rounded-sm cursor-pointer"
        >
          Add new task
        </button>
      </div>
    </form>
  );
}

export default NewTodo;
