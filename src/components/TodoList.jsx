import TodoCard from "./TodoCard";

export default function TodoList({ todos }) {
  const tab = "All";
  const filterTodos =
    tab === "All"
      ? todos
      : tab === "Open"
      ? todos.filter((val) => !val.complete)
      : todos.filter((val) => val.complete);

  return filterTodos.map((todo, todoIndex) => {
    return (
      <>
        <TodoCard key={todoIndex} todo={todo} />
      </>
    );
  });
}
