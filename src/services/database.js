const mongoose = require('mongoose')
const url = 'mongodb+srv://dev:cmRtRArf5Ip6MsuG@cluster0.e5hbong.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'


async function connectDB() {
    try {
        await mongoose.connect(url);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}


module.exports = {connectDB};