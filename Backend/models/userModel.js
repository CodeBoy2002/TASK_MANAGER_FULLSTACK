import mongoose from "mongoose";
import bcrypt from 'bcrypt'
import validator from 'validator'

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

//static signup method -> This function must not be arrow function as it leads to an error during return the user.
userSchema.statics.signup = async function (email, password) {

    //Validation
    if(!email || !password) {
        throw Error('All fields must be filled')
    }
    //Check for the string is an email
    if(!validator.isEmail(email)) {
        throw new Error('Email is not valid')
    }
    //Check for the password string is strong or not
    if(!validator.isStrongPassword(password)) {
        throw new Error('Password is not strong enough')
    }

    const exists = await this.findOne({ email })
    if(exists) {
        throw Error('Email already in use')
    }

    //Gen salt for password hashing
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //User email and User password (HashedPassword) is stored in the Database
    const user = await this.create({ email, password: hashedPassword })

    return user
}

//static login method
userSchema.statics.login = async function(email, password) {
    //Check email or password is not empty
    if(!email || !password) {
        throw Error("All fields must be filled")
    }

    //Find for an email in database before login
    const user = await this.findOne({ email })

    if(!user) {
        throw Error("Incorrect Email")
    }

    //Comparing entered password with the password stored in database
    const match = await bcrypt.compare(password, user.password)

    if(!match) {
        throw Error('Incorrect password')
    }

    return user
}

export const User = mongoose.model('User', userSchema)