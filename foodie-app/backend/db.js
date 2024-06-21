// db.js
const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://Atul:Mern123@cluster0.xxbnmfw.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0';

const mongoDB = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');

        // Access the collection and fetch data
        const fetched_data = mongoose.connection.db.collection("food_items");
        const data = await fetched_data.find({}).toArray();
        
        // Assign the fetched data to a global variable
        global.food_items = data;
        console.log('Data assigned to global variable');

        // Log the retrieved data (optional)
        // console.log('Retrieved Data:', data);

    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
    }
};

module.exports = mongoDB;
