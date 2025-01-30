import { useState } from "react";
import { FaPlus } from "react-icons/fa";
export default function TodoInput({ handleAddTodo }) {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Add a todo"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={() => {
          if (!inputValue) {
            return;
          }
          handleAddTodo(inputValue);
          setInputValue("");
        }}
      >
        <FaPlus />
      </button>
    </div>
  );
}
