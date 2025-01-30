export default function Header({ todos }) {
  const todoLength = todos.length;
  const isPlural = todoLength != 1;
  const taskorTasks = isPlural ? "tasks" : "task";
  return (
    <>
      <header>
        <h1 className="text-gradient">
          You have {todos.length} open {taskorTasks}.
        </h1>
      </header>
    </>
  );
}
