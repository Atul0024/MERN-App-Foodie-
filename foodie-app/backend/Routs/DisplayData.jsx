const express = require('express');
const router = express.Router();

router.post("/foodData", (req, res) => {
    try {
        res.send(global.food_items); // Corrected to res.send
    } catch (error) {
        console.error(error.message);
        res.send("Server Error"); // Corrected to res.send
    }
});

export default router;