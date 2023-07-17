import { useContext } from "react";
import TodoContext from "../../store/todoContext";

const CategoryItem = (props) => {
  const todoContext = useContext(TodoContext);

  return todoContext.categories.map((category) => {
    if (category.name === "All") {
      return (
        <div
          key={category.id}
          id={category.name}
          onClick={todoContext.filterTodo.bind(null, category.name)}
          className={`h-36 2xl:w-1/5 lg:w-4/5 md:w-3/5 xl:w-full max-md:w-4/5 px-3 py-8 border-2 text-2xl font-semibold shadow-xl cursor-pointer duration-300
                     ease-in-out ${category.bgColor} hover:scale-95
                   text-white rounded-xl flex flex-col justify-start hover:border-white`}
        >
          <h5>{category.name}</h5>
        </div>
      );
    } else {
      return (
        <div
          key={category.id}
          id={category.name}
          onClick={todoContext.filterTodo.bind(null, category.name)}
          className={`h-36 2xl:w-1/5 lg:w-4/5 md:w-3/5 xl:w-full max-md:w-4/5 p-3 border-2 text-2xl font-semibold shadow-xl cursor-pointer duration-300
                     ease-in-out ${category.bgColor} hover:scale-95
                   text-white rounded-xl flex flex-col justify-around hover:border-white`}
        >
          <h5>{category.name}</h5>
          <div className="w-11/12 relative bg-white h-4 rounded-xl border-2 border-white">
            <div
              style={{ width: category.count * 10 + "%" }}
              className="absolute h-3 max-w-full rounded-xl top-0 left-0 bg-gray-700"
            ></div>
          </div>
        </div>
      );
    }
  });
};

export default CategoryItem;
