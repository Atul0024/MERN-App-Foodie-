const express = require('express');
const app = express();
const port = 5000;
const mongoDB = require('./db'); // Require the mongoDB function from db.js

// Call the mongoDB function to establish MongoDB connection
mongoDB();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});
app.use(express.json())
app.use('/api', require("./Routs/createUser"));
app.use('/api', require("./Routs/DisplayData").default);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});