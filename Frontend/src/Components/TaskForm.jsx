import React, { useState } from "react";
import { useTaskContext } from "../Hooks/useTaskContext";
import { useAuthContext } from "../Hooks/useAuthContext";

const TaskForm = () => {
  const { dispatch } = useTaskContext();
  const { user } = useAuthContext()

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!user) {
      setError('You must be logged in')
      return
    }

    const task = { title, description };

    const response = await fetch(`http://localhost:5000/api/tasks`, {
      method: "POST",
      body: JSON.stringify(task),
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${user.token}`
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields)
    }
    if (response.ok) { 
      setTitle(""); 
      setDescription("");
      setError(null);
      setEmptyFields([])
      dispatch({ type: 'CREATE_TASK', payload: json });
      console.log("New task added", json);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3>Add a New Task</h3>

        <label>Task Title:</label>
        <input
          type="text"
          name="title"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Task Details:</label>
        <input
          type="text"
          name="description"
          placeholder="Enter details"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button>Add</button>
        {error && <div>{error}</div>}
      </form>
    </>
  );
};

export default TaskForm;
