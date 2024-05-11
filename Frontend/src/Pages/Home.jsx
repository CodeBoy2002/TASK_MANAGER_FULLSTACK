import React, { useEffect } from "react";
import { useTaskContext } from "../Hooks/useTaskContext";
import { useAuthContext } from "../Hooks/useAuthContext";

//Component
import TaskDetails from "../Components/TaskDetails";
import TaskForm from "../Components/TaskForm";

const Home = () => {
  const { tasks, dispatch } = useTaskContext()
  const { user } = useAuthContext()

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch(`http://localhost:5000/api/tasks`, {
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: 'SET_TASKS', payload: json })
      }
    };

    if(user) {
      fetchTasks()
    }
  }, [dispatch]);

  return (
    <div className="home">
      <div className="workouts">
        {tasks && tasks.map((task) => (
            <TaskDetails key={task._id} task={task} />
        ))}
      </div>
      <TaskForm/>
    </div>
  );
};

export default Home;
