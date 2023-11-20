const { signUpService } = require("../services/userService");
// const { generateToken } = require("../utilitis/jwtToken");

exports.signUp = async (req, res, next) => {
    try {
        const email = req.params.email;
        const userInfo = req.body;
        const result = await signUpService(email, userInfo);
        res.status(200).json({
            status: true,
            data: result,
        })
    } catch (err) {
        next(err.message)
    }
}