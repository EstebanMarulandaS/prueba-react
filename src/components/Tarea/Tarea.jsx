import "./tarea.scss";
import { useState, useEffect } from "react";

export const Tarea = () => {
  const [tasks, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");
  const [newTaskDeadline, setNewTaskDeadline] = useState("");

  // Cargar tareas almacenadas en localStorage al montar el componente
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTask(storedTasks);
    }
  }, []);

  // Guardar tareas en localStorage cuando se actualizan
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function handleDescriptionChange(event) {
    setNewTaskDescription(event.target.value);
  }

  function handleDeadlineChange(event) {
    setNewTaskDeadline(event.target.value);
  }

  /* Añadir tarea */
  function addTask() {
    if (
      newTask.trim() !== "" &&
      newTaskDescription.trim() !== "" &&
      newTaskDeadline.trim() !== ""
    ) {
      const task = {
        title: newTask,
        description: newTaskDescription,
        deadline: newTaskDeadline,
      };
      setTask((t) => [...t, task]);
      setNewTask("");
      setNewTaskDescription("");
      setNewTaskDeadline("");
    }
  }

  /* Borrar tarea */
  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, idx) => idx !== index);
    setTask(updatedTasks);
  }

  /* Subir tarea */
  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ]; // array destructuring
      setTask(updatedTasks);
    }
  }

  /* Bajar tarea */
  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ]; // array destructuring
      setTask(updatedTasks);
    }
  }

  /* Editar tarea */
  function editTask(index) {
    const task = tasks[index];
    setNewTask(task.title);
    setNewTaskDescription(task.description);
    setNewTaskDeadline(task.deadline);
    deleteTask(index);
  }

  return (
    <div className="to-do-list">
      <h1>Task Manager</h1>

      <input
        type="text"
        placeholder="Enter task title..."
        value={newTask}
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="Enter task description..."
        value={newTaskDescription}
        onChange={handleDescriptionChange}
      />
      <input
        type="date"
        placeholder="Enter task deadline..."
        value={newTaskDeadline}
        onChange={handleDeadlineChange}
      />
      <button className="add-button" onClick={addTask}>
        Add Task
      </button>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <table>
              <tbody>
                <tr>
                  <td>
                    <strong>Title:</strong>
                  </td>
                  <td className="text">{task.title}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Description:</strong>
                  </td>
                  <td className="text">{task.description}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Deadline:</strong>
                  </td>
                  <td className="text">{task.deadline}</td>
                </tr>
              </tbody>
            </table>
            <div className="button-container">
              <button className="edit-button" onClick={() => editTask(index)}>
                Edit
              </button>
              <button
                className="delete-button"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
              <button className="move-button" onClick={() => moveTaskUp(index)}>
                ⬆️
              </button>
              <button
                className="move-button"
                onClick={() => moveTaskDown(index)}
              >
                ⬇️
              </button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};
