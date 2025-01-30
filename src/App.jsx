import Header from "./components/Header";
import Tabs from "./components/Tabs";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import "./index.css";
import "./fanta.css";
import { useEffect, useState } from "react";
function App() {
  // const todos = [
  //   { input: "Wake up early in the morning", complete: false },
  //   { input: "Eat healthy or in limit", complete: true },
  //   { input: "Try to follow the routine", complete: true },
  //   { input: "Try to give my best everyday", complete: false },
  // ];
  const [todos, setTodos] = useState([
    { input: "Wake up early in the morning", complete: false },
  ]);

  const [selectedTab, setSelectedTab] = useState("Open");

  const handleAddTodo = (newTodo) => {
    const newTodoList = [...todos, { input: newTodo, complete: false }];
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  };

  const handleDeleteTodo = (index) => {
    const newTodoList = todos.filter((val, valIndex) => valIndex !== index);
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  };

  const handleCompleteTodo = (index) => {
    let newTodoList = [...todos];
    let completeTodo = todos[index];
    completeTodo["complete"] = true;
    newTodoList[index] = completeTodo;
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  };

  function handleSaveData(currTodos) {
    localStorage.setItem("todo-app", JSON.stringify({ todos: currTodos }));
  }

  useEffect(() => {
    if (!localStorage || !localStorage.getItem("todo-app")) {
      return;
    }
    let db = JSON.parse(localStorage.getItem("todo-app"));
    setTodos(db.todos);
  }, []);

  return (
    <>
      <Header todos={todos} />
      <Tabs
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        todos={todos}
      />
      <TodoList
        handleDeleteTodo={handleDeleteTodo}
        handleCompleteTodo={handleCompleteTodo}
        selectedTab={selectedTab}
        todos={todos}
      />
      <TodoInput handleAddTodo={handleAddTodo} />
    </>
  );
}

export default App;
