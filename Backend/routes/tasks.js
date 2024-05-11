import express from 'express'
import { createTask, deleteTask, getAllTasks, getSingleTask, updateTask } from '../controller/taskController.js'
export const taskRouter = express.Router()

taskRouter.get('/', getAllTasks)
taskRouter.get('/:id', getSingleTask)
taskRouter.post('/', createTask)
taskRouter.put('/:id', updateTask)
taskRouter.delete('/:id', deleteTask)