import React, { useState, useEffect } from "react";
import axios from "axios";

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  // Fetch all tasks on load
  useEffect(() => {
    axios.get("http://localhost:5000/tasks")
      .then((res) => setTasks(res.data))
      .catch((err) => console.log(err));
  }, []);

  // Handle adding task
  const addTask = () => {
    if (!title.trim()) return;

    axios.post("http://localhost:5000/tasks", {
      title,
      completed: false,
    })
      .then((res) => {
        setTasks([...tasks, res.data]);
        setTitle("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="flex-grow p-2 border rounded-l"
          placeholder="Enter a task"
        />
        <button
          onClick={addTask}
          className="bg-blue-500 text-white px-4 rounded-r"
        >
          Add
        </button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="p-2 bg-white mb-2 shadow rounded">
            {task.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
