const mongoose = require('mongoose');
const validator = require('validator');
// const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: [true, "Enter Your Email"],
        validate: [validator.isEmail, 'Please Enter a Valid Email']
    },
    password: {
        type: String,
        required: [true, "Password is Required"],
    },
    confirmPassword: {
        type: String,
        required: [true, "Please confirm your password"],
        validate: {
            validator: function (value) {
                return value === this.password;
            },
            message: "Passwords don't match!",
        },
    },
    image: String,
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);
module.exports = User