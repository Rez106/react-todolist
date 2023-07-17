import React from "react";

const TodoContext = React.createContext({
  todos: {},
  filteredTodos: {},
  addNewTodo: () => {},
  doneTodo: () => {},
  deleteTodo: () => {},
  editTodo: () => {},
  setIsAddNewShown: () => {},
  filterTodo: () => {},
  isAddShown: false,
});

export default TodoContext;
