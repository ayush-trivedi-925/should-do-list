export default function Tabs({ todos, selectedTab, setSelectedTab }) {
  // Mapping in JavaScript
  const tabs = ["All", "Open", "Completed"];
  return (
    <nav className="tab-container">
      {tabs.map((tab, tabIndex) => {
        const numOfTasks =
          tab === "All"
            ? todos.length
            : tab === "Open"
            ? todos.filter((val) => !val.complete).length
            : todos.filter((val) => val.complete).length;
        return (
          <button
            className={
              "tab-button" + (tab === selectedTab ? "selected-tab" : "")
            }
            key={tabIndex}
            onClick={() => {
              setSelectedTab(tab);
            }}
          >
            <h4>
              {tab} <span>({numOfTasks})</span>
            </h4>
          </button>
        );
      })}
      <hr />
    </nav>
  );
}
