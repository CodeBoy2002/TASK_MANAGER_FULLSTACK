import { Task } from '../models/taskModel.js'

//GET ALL THE TASKS IN DATABASE
export const getAllTasks = async(req, res) => {
    try {
        const getTasks = await Task.find({}).sort({ createdAt: -1 }) //Sort the documents in descending order 
        res.status(200).json({getTasks})
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

//GET A SINGLE TASK WITH THE SPECIFIED TASK ID
export const getSingleTask = async (req, res) => {
    const { id } = req.params

    try {
        const getTask = await Task.findById(id)
        res.status(200).json({ getTask })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

//CREATE NEW TASK IN THE DATABASE
export const createTask = async (req, res) => {
    const { title } = req.body
    try {
        const task = await Task.create({ title })
        res.status(200).json({ task })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

//DELETE TASK WITH THE SPECIFIED TASK ID
export const deleteTask = async (req, res) => {
    const { id } = req.params
    try {
        const deleteTask = await Task.findByIdAndDelete(id)
        if(!deleteTask) res.status(500).json({ message: "No Such Task Found!" })
        
        res.status(200).json({ message: "Task Deleted Successfully" })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

//UPDATE TASK WITH THE SPECIFIED TASK ID
export const updateTask = async (req, res) => {
    const { id } = req.params

    try {
        const updateTask = await Task.findByIdAndUpdate(id, req.body)
        if(!updateTask) res.status(500).json({ message: "No Such Task Found!" })

        res.status(200).json({ message: "Task Updated Successfully" })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
