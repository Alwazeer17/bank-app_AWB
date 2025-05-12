const { application } = require('express')
const mongoose = require('mongoose')


const applicationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirmPassword: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        
    },
    age: {
        type: Number,
        min: 18,
        max: 100
    },
    gender: {
        type: String,
    },
    job: {
        type: String,
        enum: ['student', 'employee', 'self-employed', 'retired', 'other']
    },
    address: {
        type: String,
        required: true
    }
})

const userSchema = new mongoose.Schema({
   email:
    {type: String,
    required: true,
    unique: true},
   password:
    {type: String,
    required: true},
    account: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Account'
    }
    ],
    card: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Card'
    }
    ],
    applications:applicationSchema
})

module.exports = mongoose.model('User', userSchema)