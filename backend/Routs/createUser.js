const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');

router.post("/createuser",
    [
        body('email').isEmail().withMessage('Please enter a valid email address'),
        body('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters long')
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            await User.create({
                name: "Atul",
                location: "India",
                email:"atul78@gmail.com" ,
                password:"1234"
            });
            res.json({ success: true });
        } catch (error) {
            console.error("Error:", error);
            res.status(500).json({ success: false, message: "Failed to create user" });
        }
    }
);

module.exports = router;
