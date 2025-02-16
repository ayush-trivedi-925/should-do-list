import TodoCard from "./TodoCard";

export default function TodoList({
  todos,
  selectedTab,
  handleDeleteTodo,
  handleCompleteTodo,
}) {
  const filterTodos =
    selectedTab === "All"
      ? todos
      : selectedTab === "Open"
      ? todos.filter((val) => !val.complete)
      : todos.filter((val) => val.complete);

  return filterTodos.map((todo, todoIndex) => {
    return (
      <>
        <TodoCard
          key={todoIndex}
          todoIndex={todos.findIndex((val) => val.input == todo.input)}
          handleDeleteTodo={handleDeleteTodo}
          handleCompleteTodo={handleCompleteTodo}
          todo={todo}
        />
      </>
    );
  });
}
