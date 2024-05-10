import express from 'express'
export const router = express.Router()

import { loginUser, registerUser } from '../controller/userController.js'

//Login route
router.post('/login', loginUser)

//Signup route
router.post('/signup', registerUser)

// module.exports = router