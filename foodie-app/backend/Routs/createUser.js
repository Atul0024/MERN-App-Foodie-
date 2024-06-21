const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const jwtSecret="My name is Anthony Gonzalvis Me Duniya Me Akela Hu"
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/createuser",
    [
        body('email').isEmail(),
        body('password').isLength({ min: 5 })
    ],
    async (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, location, email, password } = req.body;

        const salt = await bcrypt.genSalt(10);
        let secPassword = await bcrypt.hash(req.body.password, salt);
        try {
            await User.create({
                name: req.body.name,
                location: req.body.location,
                email: req.body.email,
                password: secPassword
            })
                .then(res.json({ success: true }));
        } catch (error) {
            console.error(error);
            res.json({ success: false });
        }
    }
);

router.post("/Loginuser",
    [
        body('email').isEmail(),
        body('password').isLength({ min: 5 })
    ], async (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        let email = req.body.email;
        try {
            let userData = await User.findOne({ email });
            if (!userData) {
                return res.status(400).json({ errors: "Incorrect Email or Password" });
            }
            const pwdCompare = await bcrypt.compare(req.body.password, userData.password)

            if (!pwdCompare) {
                return res.status(400).json({ errors: "Incorrect Email or Password" });
            }
const data={
    user:{
        id : userData.id
    }
}
const authToken=jwt.sign(data, jwtSecret)

            return res.json({ success: true, authToken: authToken });


        } catch (error) {
            console.error(error);
            res.json({ success: false });
        }




    });

module.exports = router;