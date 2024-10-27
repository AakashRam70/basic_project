const bcrypt = require('bcrypt');
const UserModel = require('../Models/User')
const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await UserModel.findOne({ email });
        if (user) {
            return res.status(409).json({
                msg: "User is already exist, you can login", success: false
            })
        }
        const userModel = new UserModel({ name, email, password });
        userModel.password = await bcrypt.hash(password, 10);
        await userModel.save();
        res.status(201).json({
            msg:"Signup Successfully",
            success:true,
        })
    } catch (err) {
        res.status(500).json({
            msg:"Internal Server Error",
            success:flase
        })
    }
}

module.exports = signup;