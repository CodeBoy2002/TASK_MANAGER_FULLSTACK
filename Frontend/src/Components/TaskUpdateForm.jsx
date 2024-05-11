import React, { useEffect, useState } from "react";
import { useTaskContext } from "../Hooks/useTaskContext";
import { useNavigate, useParams } from "react-router-dom"
import axios from 'axios'
import { useAuthContext } from "../Hooks/useAuthContext";


const TaskForm = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { user } = useAuthContext()


  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
        const response = await fetch(`http://localhost:5000/api/tasks/${id}`, {
          headers: {
            'Authorization': `Bearer ${user.token}`
          }
        })
    
        const json = await response.json()
        console.log(json.title);
        console.log(json.description);
        setTitle(json.title)
        setDescription(json.description)
    }

    fetchData()
  }, [])

  const handleUpdateTask = async (e) => {
    e.preventDefault();

    const task = { title, description };
    
    axios
        .put(`http://localhost:5000/api/tasks/${id}`, task, {
          headers: {
            'Authorization': `Bearer ${user.token}`
          }
        })
        .then(() => {
            navigate('/')
        })
        .catch((error) => {
            console.log(error.message);
        })
  };
  return (
    <>
      <form onSubmit={handleUpdateTask}>
        <h3>Update Task</h3>

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

        <button>Update</button>
        {error && <div>{error}</div>}
      </form>
    </>
  );
};

export default TaskForm;
