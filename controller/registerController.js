import RegisterModel from "../models/registerModel.js";


export const registerUser = async (req, res) => {
    const { name, email, password} = req.body;
    try {
        const user = await RegisterModel.findOne({ name });
        if (user) {
            res.send({ message: "User already registered" });
        } else {
            const newUser = new RegisterModel({
                name,
                email,
                password
            });
            await newUser.save();
            res.send({ message: "Successfully registered. Please login now." });
        }
    } catch (error) {
        res.status(500).send({ error: "Internal server error" });
    }
};

export const loginUser = async (req, res) => {
    const { name, password } = req.body;
    try {
        const user = await RegisterModel.findOne({ name });
        if (user) {
            if (password === user.password) {
                res.send({ message: "Login successful", user });
            } else {
                res.send({ message: "Password didn't match" });
            }
        } else {
            res.send({ message: "User not registered" });
        }
    } catch (error) {
        res.status(500).send({ error: "Internal server error" });
    }
};
