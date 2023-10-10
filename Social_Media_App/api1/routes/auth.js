const router = require("express").Router();
const User = require("../models/User")
const bcrypt = require("bcrypt")

// Register
router.post("/register", async (req, res) => {
    try {
        // Generate new password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        // Create new User
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            ...req.body,
            password: hashPassword
        });

        // Save user and response
        const user = await newUser.save();
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
})

// Login
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        !user && res.status(404).json("User not found!");

        const validPassword = await bcrypt.compare(req.body.password, user.password)
        !validPassword && res.status(400).json("Wrong password")

        res.status(200).json("You are Logged In")
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router;