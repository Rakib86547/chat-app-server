const User = require("../models/User")

exports.signUpService = async (email, userInfo) => {
    // const user = User.updateOne(
    //     { email: email },
    //     { $set: userInfo },
    //     { upsert: true }
    // );
    const user = await User.create(userInfo)
    return user
}