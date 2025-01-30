import Header from "./components/Header";
import Tabs from "./components/Tabs";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import "./index.css";
import "./fanta.css";
function App() {
  return (
    <>
      <Header />
      <Tabs />
      <TodoList />
      <TodoInput />
    </>
  );
}

export default App;
