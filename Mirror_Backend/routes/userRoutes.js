const express = require("express");
const router = express.Router();
const User = require("../modal/Users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const secretKey = "kjduwg6tdqwt@%^hhbhftr456#7*&*^%$#@!@#";

// Register
router.post('/register', async (req, res) => {
    try {
        const { name, email, phoneno, password } = req.body;
        if (!name || !email || !phoneno || !password)
            return res.status(400).json({ status: false, message: "Please fill all fields" });

        const existingUser = await User.findOne({ email });
        if (existingUser)
            return res.status(400).json({ status: false, message: "User already exists" });

        const existingPhone = await User.findOne({ phoneno });
        if (existingPhone)
            return res.status(400).json({ status: false, message: "Phone number already exists" });

        const hashPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, email, phoneno, password: hashPassword });
        await newUser.save();

        return res.status(200).json({ status: true, message: "User registered successfully" });
    } catch (error) {
        console.error("Error registering user", error);
        return res.status(500).json({ message: "Internal server error" });
    }
});

// Login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password)
            return res.status(400).json({ status: false, message: "All fields are required" });

        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password)))
            return res.status(400).json({ status: false, message: "Invalid credentials" });

        const token = jwt.sign({ id: user._id, email: user.email }, secretKey, { expiresIn: '1h' });
        return res.status(201).json({ status: true, message: "Login successful", token });
    } catch (error) {
        return res.status(400).json({ status: false, message: "Something went wrong", error: error.message });
    }
});

module.exports = router;
