import { Edit, TickSquare, Trash } from "iconsax-react";
import { useContext, useState } from "react";
import TodoContext from "../../store/todoContext";
import EditTodoForm from "../EditTodo/EditTodoForm";

export const FilteredTodo = (props) => {
  if (props.todos === undefined) return;
  return props.todos.map((todo) => {
    return (
      <div
        id={todo.id}
        className={`2xl:w-11/12 max-md:w-full max-sm:11/12 truncate ${
          todo.isDone ? `opacity-50` : ""
        }`}
        key={todo.date}
      >
        <div
          id={todo.id}
          className={`w-full truncate bg-slate-600 p-4 rounded-xl flex items-center 
                                    max-md:flex-col max-md:justify-center max-md:gap-4 max-sm:mt-4
                                    `}
        >
          <div className="w-1/3 flex flex-col max-md:w-full max-md:items-center">
            <p className="text-slate-200 font-semibold text-lg">{todo.text}</p>
            <p className="text-slate-400">
              {new Date(todo.date).toLocaleString()}
            </p>
          </div>
          <div className="w-1/3 flex items-center max-sm:justify-center">
            <p className="bg-emerald-600 text-slate-300 py-1 px-5 rounded-xl cursor-default">
              {todo.category}
            </p>
          </div>
          <div className="flex gap-4 w-1/3 justify-end max-md:w-full max-md:justify-center">
            <button
              id={todo.id}
              type="button"
              className="text-green-500 duration-300 ease-in-out hover:opacity-80"
              onClick={props.todoContext.doneTodo.bind(null, todo.id)}
            >
              <TickSquare />
            </button>
            <button
              disabled={todo.isDone}
              id={todo.id}
              type="button"
              className="text-cyan-500 hover:opacity-80"
              onClick={() => props.setIsEditShow(todo.id)}
            >
              <Edit />
            </button>
            <button
              disabled={todo.isDone}
              id={todo.id}
              type="button"
              className="text-red-500 hover:opacity-80"
              onClick={props.todoContext.deleteTodo.bind(null, todo.id)}
            >
              <Trash />
            </button>
          </div>
        </div>
        <div
          disabled={todo.isDone}
          id={todo.id}
          className={`truncate mx-auto w-11/12 ${
            props.isEditshow === todo.id
              ? "opacity-100 max-md:h-60 max-sm:h-60 h-24 p-4"
              : "h-0 p-0"
          } 
                                transition-all duration-300 ease-in-out bg-slate-700 
                                p-4 rounded-b-lg
                                `}
        >
          <EditTodoForm id={todo.id} item={todo} close={props.setIsEditShow} />
        </div>
      </div>
    );
  });
};

const TodoItem = () => {
  const todoContext = useContext(TodoContext);

  const [isEditshow, setIsEditShow] = useState(0);

  const hasItem = todoContext.filteredTodos.length > 0;
  // console.log(hasItem);
  const noItem = (
    <p className="text-red-300 font-bold text-3xl text-center">
      No Todo Found. Add One!
    </p>
  );

  return hasItem ? (
    <FilteredTodo
      todos={todoContext.filteredTodos}
      setIsEditShow={setIsEditShow}
      todoContext={todoContext}
      isEditshow={isEditshow}
    />
  ) : (
    noItem
  );
};

export default TodoItem;
