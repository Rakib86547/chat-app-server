const { signUpService, existUserService, loginService } = require("../services/userService");
const { generateToken } = require("../utilitis/jwtToken");
const bcrypt = require('bcryptjs');
exports.signUp = async (req, res, next) => {
    try {
        const email = req.params.email;
        const userInfo = req.body;
        const salt = 10;
        const hashPassword = await bcrypt.hash(userInfo.password, salt);
        const details = {
            name: userInfo.name,
            email: userInfo.email,
            password: hashPassword,
            image: userInfo.image
        };
        // const existUser = await existUserService(email);
        // if (existUser) {
        //     return 'User Already Exist'
        // };
        const result = await signUpService(email, details);
        const authToken = generateToken(details);
        res.status(200).json({
            status: true,
            data: result,
            token: authToken
        })
    } catch (err) {
        console.log(err)
        const status = 500;
        const success = false;
        const message = err.message;
        const extraMessage = 'User Signup Error'
        const errors = { status, message, success, extraMessage }
        next(errors)
    }
};

// exports.login = async (req, res, next) => {
//     try {
//         const email = req.params.email;
//         const userInfo = req.body;
//         const salt = 10;
//         const hashPassword = await bcrypt.hash(userInfo.password, salt);
//         const details = {
//             email: userInfo.email,
//             password: hashPassword,
//         };
//         const result = await loginService(email, details);
//         const authToken = generateToken(userInfo);
//         res.status(200).json({
//             success: true,
//             data: result,
//             token: authToken
//         })
//     } catch (err) {
//         const status = 500;
//         const success = false;
//         const message = err.message;
//         const extraMessage = 'User Login Successfully'
//         const errors = { status, message, success, extraMessage }
//         next(errors)
//     }
// };