import "./App.css";
import ReactDOM from "react-dom";
import NewToDo from "./components/NewTodo/NewTodo";
import CategoryList from "./components/ShowCategory/CategoryList";
import TodoList from "./components/ShowToDo/TodoList";
import { useContext, useEffect } from "react";
import TodoContext from "./store/todoContext";

function App() {
  return (
    <>
      {ReactDOM.createPortal(<NewToDo />, document.getElementById("overlays"))}
      <CategoryList />
      <TodoList />
    </>
  );
}

export default App;
