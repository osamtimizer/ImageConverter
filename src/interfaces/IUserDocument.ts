import mongoose = require('mongoose');

export default interface IUserDocument extends mongoose.Document {
    userId: string
    email: string
    password: string
    salt: string
    title: string
    firstName: string
    middleName: string
    lastName: string
    age: number
}