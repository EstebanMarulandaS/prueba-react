import "./tarea.scss";
import { useState } from "react";

export const Tarea = () => {
  const [tasks, setTask] = useState(["eat", "take a shower"]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    setTask((t) => [...t, newTask]);
    setNewTask("");
  }

  function deleteTask(index) {}

  function moveTaskUp(index) {}
  function moveTaskDown(index) {}

  return (
    <div className="to-do-list">
      <h1>To do List</h1>

      <input
        type="text"
        placeholder="Enter a task..."
        value={newTask}
        onChange={handleInputChange}
      />
      <button className="add-button" onClick={addTask}>
        Add Task
      </button>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className="move-button" onClick={() => moveTaskUp(index)}>
              ⬆️
            </button>
            <button className="move-button" onClick={() => moveTaskUp(index)}>
              ⬇️
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};
