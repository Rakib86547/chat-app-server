const User = require("../models/User")

exports.signUpService = async (email, userInfo) => {
    console.log(userInfo)
    const user = User.updateOne(
        { email: email },
        { $set: userInfo },
        { upsert: true }
    );
    return user
};

// exports.existUserService = async (email) => {
//     const result = User.findOne({ email: email });
//     return result;
// };

// exports.loginService = async (email, userInfo) => {
//     const result = User.updateOne(
//         { email: email },
//         { $set: userInfo },
//         { upsert: true }
//     );
//     return result;
// };