import axios from 'axios'
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import { useAuthContext } from '../Hooks/useAuthContext'

const TaskInfo = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const {id} = useParams()
    const { user } = useAuthContext()

    useEffect(() => {
        const fetchDetails = async () => {
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
        
        fetchDetails()
    }, [])

  return (
    <div className='info-container'>
        <h3>Task Information</h3>
        <p>{title}</p>
        <p>{description}</p>
        <button>
            <Link to={'/'}>Back</Link>
        </button>
    </div>
  )
}

export default TaskInfo