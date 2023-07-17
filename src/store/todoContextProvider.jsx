import { useReducer, useState } from "react";
import TodoContext from "./todoContext";

const defaultValue = {
  todos: [],
  category: [
    { id: 1, name: "All", bgColor: "bg-green-600 border-green-600" },
    { id: 2, name: "Work", count: 0, bgColor: "bg-pink-600 border-pink-600" },
    { id: 3, name: "Home", count: 0, bgColor: "bg-rose-600 border-rose-600" },
    { id: 4, name: "School", count: 0, bgColor: "bg-cyan-600 border-cyan-600" },
    {
      id: 5,
      name: "Game",
      count: 0,
      bgColor: "bg-purple-600 border-purple-600",
    },
    {
      id: 6,
      name: "Exercise",
      count: 0,
      bgColor: " bg-lime-600 border-lime-600",
    },
  ],
  filteredTodos: [],
};

const reducerFunc = (state, action) => {
  if (action.type === "ADD") {
    let updatedItems;
    let updatedCategories;

    const existingCateIndex = state.category.findIndex(
      (category) => category.name === action.todo.category
    );
    const existingCate = state.category[existingCateIndex];
    let updatedCategory = {
      ...existingCate,
      count: existingCate.count + 1,
    };

    updatedCategories = state.category;
    updatedCategories[existingCateIndex] = updatedCategory;
    updatedItems = state.todos.concat(action.todo);
    return {
      todos: updatedItems,
      filteredTodos: updatedItems,
      category: updatedCategories,
    };
  }

  if (action.type === "DONE") {
    let updatedItems;

    const existingTodoIndex = state.todos.findIndex(
      (todo) => todo.id === action.id
    );
    const existingTodo = state.todos[existingTodoIndex];
    const existingTodoIsDone = existingTodo.isDone;

    let updatedItem = {
      ...existingTodo,
      isDone: !existingTodoIsDone,
    };

    updatedItems = state.todos;
    updatedItems[existingTodoIndex] = updatedItem;

    return {
      todos: updatedItems,
      filteredTodos: state.todos,
      category: state.category,
    };
  }

  if (action.type === "DELETE") {
    const filtered = state.todos.filter((todo) => todo.id !== action.id);
    console.log(filtered);
    const filteredCate = state.todos.filter((todo) => todo.id === action.id);
    let updatedCategories;

    const existingCateIndex = state.category.findIndex(
      (category) => category.name === filteredCate[0].category
    );
    const existingCate = state.category[existingCateIndex];
    let updatedCategory = {
      ...existingCate,
      count: existingCate.count - 1,
    };

    updatedCategories = state.category;
    updatedCategories[existingCateIndex] = updatedCategory;
    return {
      todos: filtered,
      filteredTodos: filtered,
      category: updatedCategories,
    };
  }

  if (action.type === "EDIT") {
    let updatedItems;

    const existingTodoIndex = state.todos.findIndex(
      (todo) => todo.id === action.todo.id
    );
    const existingTodo = state.todos[existingTodoIndex];

    if (
      existingTodo.text === action.todo.text &&
      existingTodo.category === action.todo.category
    ) {
      return {
        todos: state.todos,
        filteredTodos: state.filteredTodos,
        category: state.category,
      };
    } else if (existingTodo.category !== action.todo.category) {
      let updatedCategories;

      const existingCateIndex = state.category.findIndex(
        (category) => category.name === existingTodo.category
      );
      const existingCate = state.category[existingCateIndex];

      let updatedCategory = {
        ...existingCate,
        count: existingCate.count - 1,
      };

      const existingCateIndexNew = state.category.findIndex(
        (category) => category.name === action.todo.category
      );
      const existingCateNew = state.category[existingCateIndexNew];

      let updatedCategoryNew = {
        ...existingCateNew,
        count: existingCateNew.count + 1,
      };

      let updatedItem = {
        ...existingTodo,
        text: action.todo.text,
        category: action.todo.category,
      };

      updatedItems = state.todos;
      updatedCategories = state.category;

      updatedCategories[existingCateIndex] = updatedCategory;
      updatedCategories[existingCateIndexNew] = updatedCategoryNew;
      updatedItems[existingTodoIndex] = updatedItem;

      return {
        todos: updatedItems,
        filteredTodos: state.todos,
        category: updatedCategories,
      };
    } else {
      let updatedItem = {
        ...existingTodo,
        text: action.todo.text,
        category: action.todo.category,
      };

      updatedItems = state.todos;
      updatedItems[existingTodoIndex] = updatedItem;

      return {
        todos: updatedItems,
        filteredTodos: state.todos,
        category: state.category,
      };
    }
  }

  if (action.type === "FILTER") {
    let filteredTodos = state.todos;
    if (action.category === "Work") {
      filteredTodos = state.todos.filter(
        (todo) => todo.category === action.category
      );

      return {
        todos: state.todos,
        filteredTodos: filteredTodos,
        category: state.category,
      };
    }
    if (action.category === "Home") {
      filteredTodos = state.todos.filter(
        (todo) => todo.category === action.category
      );

      return {
        todos: state.todos,
        filteredTodos: filteredTodos,
        category: state.category,
      };
    }
    if (action.category === "School") {
      filteredTodos = state.todos.filter(
        (todo) => todo.category === action.category
      );

      return {
        todos: state.todos,
        filteredTodos: filteredTodos,
        category: state.category,
      };
    }
    if (action.category === "Game") {
      filteredTodos = state.todos.filter(
        (todo) => todo.category === action.category
      );

      return {
        todos: state.todos,
        filteredTodos: filteredTodos,
        category: state.category,
      };
    }
    if (action.category === "Exercise") {
      filteredTodos = state.todos.filter(
        (todo) => todo.category === action.category
      );

      return {
        todos: state.todos,
        filteredTodos: filteredTodos,
        category: state.category,
      };
    }
    if (action.category === "All") {
      return {
        todos: state.todos,
        filteredTodos: state.todos,
        category: state.category,
      };
    }

    return {
      todos: state.todos,
      filteredTodos: state.todos,
      category: state.category,
    };
  }

  return defaultValue;
};

const TodoContextProvider = (props) => {
  const [todoState, dispatchtodo] = useReducer(reducerFunc, defaultValue);
  const [isAddNewShown, setIsAddNewShown] = useState(false);

  const addNewTodoHandler = (todo) => {
    dispatchtodo({ type: "ADD", todo: todo });
  };

  const doneTodoHandler = (id) => {
    dispatchtodo({ type: "DONE", id: id });
  };

  const deleteTodoHandler = (id) => {
    console.log(id);
    dispatchtodo({ type: "DELETE", id: id });
  };

  const editTodoHandler = (todo) => {
    dispatchtodo({ type: "EDIT", todo: todo });
  };

  const filterTodoHandler = (category) => {
    dispatchtodo({ type: "FILTER", category: category });
  };

  const values = {
    todos: todoState.todos,
    filteredTodos: todoState.filteredTodos,
    categories: todoState.category,
    addNewTodo: addNewTodoHandler,
    doneTodo: doneTodoHandler,
    deleteTodo: deleteTodoHandler,
    editTodo: editTodoHandler,
    isAddShown: isAddNewShown,
    setIsAddNewShown: setIsAddNewShown,
    filterTodo: filterTodoHandler,
  };

  return (
    <TodoContext.Provider value={values}>{props.children}</TodoContext.Provider>
  );
};

export default TodoContextProvider;
