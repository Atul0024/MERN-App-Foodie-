
//Login Data

// const express = require('express');
// const router = express.Router();
// const User = require('../models/User');

// router.post("/Loginuser",async (req, res) => {
//     let email = req.body.email;
//         try {
//             await User.findOne(email)
//             }
//          catch (error) {
//             console.error("Error:", error);
//             res.status(500).json({ success: false, message: "Failed to create user" });
//         }
    
// });

// module.exports = router;



// backend signup 
// const express = require('express');
// const router = express.Router();
// const User = require('../models/User');
// const { body, validationResult } = require('express-validator');

// router.post("/createuser",
//     [
//         body('email').isEmail(),
//         body('password').isLength({ min: 5 })
//     ],
//     async (req, res) => {
//         const errors = validationResult(req);
        
//         if (!errors.isEmpty()) {
//             return res.status(400).json({ errors: errors.array() });
//         }

//         const { name, location, email, password } = req.body;

//         try {
//             await User.create({
//                 name,
//                 location,
//                 email,
//                 password
//             });
//             res.json({ success: true });
//         } catch (error) {
//             console.error("Error:", error);
//             res.status(500).json({ success: false, message: "Failed to create user" });
//         }
//     }
// );

// module.exports = router;
