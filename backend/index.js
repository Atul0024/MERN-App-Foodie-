const express = require('express');
const app = express();
const port = 5000;
const mongoDB = require('./db'); // Require the mongoDB function from db.js

// Call the mongoDB function to establish MongoDB connection
mongoDB();

app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use(express.json())
app.use('/api', require("./Routs/createUser"));
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});