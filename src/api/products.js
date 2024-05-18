
const express = require('express');
const { connectToDatabase } = require('../services/database');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const db = await connectToDatabase();
    const products = await db.collection('products').find().toArray();
    res.json({ data: products });
  } catch (error) {
    console.error('Error getting products:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/:productId', async (req, res) => {
  try {
    const db = await connectToDatabase();
    const product = await db.collection('products').findOne({ _id: req.params.productId });
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
    const db = await connectToDatabase();
    const result = await db.collection('products').deleteOne({ _id: req.params.productId });
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
