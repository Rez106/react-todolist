import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import TodoContextProvider from "./store/todoContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <TodoContextProvider>
    <App />
  </TodoContextProvider>
);
