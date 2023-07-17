import { useContext, useRef, useState } from "react";
import classes from "./NewTodoForm.module.css";
import { AddSquare, ArchiveTick, Category, CloseSquare } from "iconsax-react";
import TodoContext from "../../store/todoContext";

const NewToDoForm = (props) => {
  const todoContext = useContext(TodoContext);

  const filteredCategory = todoContext.categories.filter(
    (c) => c.name !== "All"
  );

  const enteredTodo = useRef();
  const enteredCategory = useRef();

  const onAddTodoHandler = (e) => {
    e.preventDefault();
    const todo = enteredTodo.current.value;
    const category = enteredCategory.current.value;

    if (todo === "" || category === "default") return;

    todoContext.addNewTodo({
      id: new Date().getTime(),
      text: todo,
      category: category,
      date: new Date().toISOString(),
      isDone: false,
    });
    enteredTodo.current.value = "";
    enteredCategory.current.value = "default";
    todoContext.setIsAddNewShown(false);
  };

  const onCloseClickHandler = () => {
    todoContext.setIsAddNewShown(false);
  };

  return (
    <form
      className="w-full flex-col justify-center items-center bg-slate-700 p-6 rounded-xl shadow-xl"
      onSubmit={onAddTodoHandler}
    >
      <h3 className="text-white font-bold">Add Your Todo</h3>
      <div className="w-full flex items-center relative">
        <input
          ref={enteredTodo}
          className="w-full py-2 text-lg my-3 font-bold opacity-60 ease-in-out duration-300
                               outline-none text-white bg-transparent border-b-2 border-slate-400
                               focus:opacity-100"
          type="text"
          id="todoinput"
          placeholder="Activity Name"
        />
        <ArchiveTick
          size="24"
          color="#fff"
          className={`mr-1 ${classes["input-icon"]}`}
        />
      </div>
      <div className="w-full flex items-center">
        <select
          defaultValue="default"
          ref={enteredCategory}
          className="w-full bg-slate-600 my-4 outline-none py-3 px-2 text-slate-300 font-semibold
                    rounded-xl"
          id="categorySelect"
        >
          <option value="default">Select a Category</option>
          {filteredCategory.map((category) => (
            <option
              className="font-semibold"
              key={category.id}
              value={category.name}
            >
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div className="w-full flex max-sm:flex-col items-center justify-end max-sm:justify-center">
        <button
          className="bg-slate-700 border-white border-2 rounded-xl p-2 max-sm:p-3 duration-500 ease-in-out transition-all
                                 flex items-center w-1/3 font-bold text-white max-sm:w-10/12 max-sm:justify-center
                               hover:bg-red-600 hover:text-white"
          type="button"
          onClick={onCloseClickHandler}
        >
          <CloseSquare
            className={`text-white mr-3 max-sm:hidden ${classes["add-icon"]}`}
            size="32"
          />
          Cancel
        </button>
        <button
          className="bg-slate-700 border-white border-2 rounded-xl p-2 max-sm:p-3 duration-500 ease-in-out transition-all
                                 flex items-center w-1/3 font-bold text-white ml-4 max-sm:w-10/12 max-sm:justify-center max-sm:ml-0
                                 max-sm:mt-2
                               hover:bg-green-600 hover:text-white"
          type="submit"
        >
          <AddSquare
            className={`text-white mr-3 max-sm:hidden ${classes["add-icon"]}`}
            size="32"
          />
          Add
        </button>
      </div>
    </form>
  );
};

export default NewToDoForm;
