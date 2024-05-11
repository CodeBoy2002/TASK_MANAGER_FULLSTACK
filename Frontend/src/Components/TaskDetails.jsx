import { Link } from "react-router-dom"
import { useTaskContext } from "../Hooks/useTaskContext"
import { useAuthContext } from "../Hooks/useAuthContext"

import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const TaskDetails = ({ task }) => {
  const { dispatch } = useTaskContext()
  const { user } = useAuthContext()

  const handleClick = async ()=> {
    if(!user) {
      return 
    }
    const response = await fetch(`http://localhost:5000/api/tasks/${task._id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    })
    const json = await response.json()

    if(response.ok) {
      dispatch({ type: 'DELETE_TASK', payload: json })
    }
  }

  return (
    <div className="workout-details">
        <h4>{task.title}</h4>
        <p>{task.description}</p>
        <p>{formatDistanceToNow(new Date(task.createdAt), { addSuffix: true })}</p>
        <span className="material-symbols-outlined" onClick={handleClick}>Delete</span>
        <button className="material-button">
          <Link className="link-up" to={`/update/${task._id}`}>update</Link>
        </button>
        <button className="material-button">
          <Link className="link-in" to={`/detail/${task._id}`}>info</Link>
        </button>
    </div>
  )
}

export default TaskDetails