import { User } from '../models/userModel.js'
import jwt from 'jsonwebtoken'

//Function to create Token
const createToken = (_id) => {
    //Token creation using jsonwebtoken, which expires in 3 days which means user have to login again after 3 days.
    return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
}

export const loginUser = async(req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.login(email, password)

        //create a token
        const token = createToken(user._id)

        res.status(200).json({ email, token })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

export const registerUser = async(req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.signup(email, password)   
        
        //create token
        const token = createToken(user._id)
        
        res.status(200).json({ email, token })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// module.exports = { loginUser, registerUser }