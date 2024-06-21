// db.js
const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://Atul:Mern123@cluster0.xxbnmfw.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0';

const mongoDB = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect(mongoURI);
        console.log('Connected to MongoDB');

        // Access the collection and fetch data
        const fetched_data = await mongoose.connection.db.collection("food_items");
        const data = await fetched_data.find({}).toArray();

        // Log the retrieved data
        console.log('Retrieved Data:', data);

        // Close the connection
        // mongoose.connection.close();
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
    }
};

module.exports = mongoDB;
