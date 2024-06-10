const { MongoClient } = require('mongodb');
require('dotenv').config();

const uri = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.e5hbong.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const client = new MongoClient(uri);

async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to the database');
    return client.db('exclusive_db');
  } catch (error) {
    console.error('Error connecting to the database:', error.message);
    console.error('Stack trace:', error.stack);
    throw new Error('Failed to connect to the database. Please check your connection settings and try again.');
  }
}

module.exports = { connectToDatabase, client };
