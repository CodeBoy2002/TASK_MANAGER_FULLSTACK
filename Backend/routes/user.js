import express from 'express'
export const userRouter = express.Router()

import { loginUser, registerUser } from '../controller/userController.js'

//Login route
userRouter.post('/login', loginUser)

//Signup route
userRouter.post('/signup', registerUser)
