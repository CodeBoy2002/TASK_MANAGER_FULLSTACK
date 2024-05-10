import express from 'express'
const app = express()
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import { router } from './routes/user.js'


//Middleware
app.use(express.json())
app.use(cors())

//Routes
//Authentication Route
app.use('/api/tasks', router)


const PORT = 5000
dotenv.config()


mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        console.log('App is connected to DB')
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
    })
    .catch((error) => console.log(error))