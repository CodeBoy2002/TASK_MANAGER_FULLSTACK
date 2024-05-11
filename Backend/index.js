import express from 'express'
const app = express()
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'

//Importing API routes
//User Auth Route
import { userRouter } from './routes/user.js'
//Task Route -> (GET, POST, PUT, DELETE)
import { taskRouter } from './routes/tasks.js'



//Middleware
app.use(express.json())
app.use((req, res, next) => {
    next()
})

app.use(cors())

//Routes
//Authentication Route
app.use('/api/users', userRouter)
//Task Route
app.use('/api/tasks', taskRouter)

dotenv.config()


mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        console.log('App is connected to DB')
        app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`))
    })
    .catch((error) => console.log(error))