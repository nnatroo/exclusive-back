const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

const router = express.Router();

async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    return client.db('your_database_name').collection('products');
  } catch (error) {
    console.error('Error connecting to database:', error);
    throw error;
  }
}

router.use(async (req, res, next) => {
  try {
    if (!client.isConnected()) {
      console.log('MongoDB connection lost, reconnecting...');
      await connectToDatabase();
    }
    next();
  } catch (error) {
    console.error('Error in MongoDB middleware:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/', async (req, res) => {
  try {
    const collection = await connectToDatabase();
    const products = await collection.find().toArray();
    res.json({ data: products });
  } catch (error) {
    console.error('Error getting products:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/:productId', async (req, res) => {
  try {
    const collection = await connectToDatabase();
    const product = await collection.findOne({ _id: ObjectId(req.params.productId) });
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    console.error('Error getting product:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.delete('/:productId', async (req, res) => {
  try {
    const collection = await connectToDatabase();
    const result = await collection.deleteOne({ _id: ObjectId(req.params.productId) });
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
