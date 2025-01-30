import Header from "./components/Header";
import Tabs from "./components/Tabs";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import "./index.css";
import "./fanta.css";
function App() {
  const todos = [
    { input: "Wake up early in the morning", complete: false },
    { input: "Eat healthy or in limit", complete: true },
    { input: "Try to follow the routine", complete: true },
    { input: "Try to give my best everyday", complete: false },
  ];
  return (
    <>
      <Header todos={todos} />
      <Tabs todos={todos} />
      <TodoList todos={todos} />
      <TodoInput />
    </>
  );
}

export default App;
