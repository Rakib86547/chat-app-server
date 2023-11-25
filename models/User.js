const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
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

// secure password with the help of bcryptjs

// userSchema.pre("save", async function (next) {
//     const user = this
//     if (!user.isModified("password")) {
//         next()
//     };
//     try {
//         const salt = await bcrypt.genSalt(10);
//         const hashPassword = await bcrypt.hash(user.password, salt);
//          user.password = hashPassword
//          next()
//     } catch (error) {
//         next(error)
//     }
// });


const User = mongoose.model('User', userSchema);
module.exports = User
