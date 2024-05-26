const { MongoClient } = require('mongodb');
process.env.MONGODB_USERNAME = 'LukaKharkhelauri';
process.env.MONGODB_PASSWORD = 'FN8lkGUG3Ivh7p0j';
const username = encodeURIComponent(process.env.MONGODB_USERNAME);
const password = encodeURIComponent(process.env.MONGODB_PASSWORD);
const uri = `mongodb+srv://${username}:${password}@cluster0.e5hbong.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri);

async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to the database');
    return client.db('exclusive_db');
  } catch (error) {
    console.error('Error connecting to the database:', error);
    throw error;
  }
}

module.exports = { connectToDatabase, client };