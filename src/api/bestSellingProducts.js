const express = require('express');
const { connectToDatabase } = require('../services/database');

const router = express.Router();

router.get('/', (req, res) => {
  const arr = [];

  async function run() {
    try {
      const database = await connectToDatabase();
      const products = database.collection('best-selling-products');
      const bestSellingProducts = products.find({});

      await bestSellingProducts.forEach((doc) => {
        arr.push(doc);
      });

      res.json({
        data: arr,
      });
    } catch (error) {
      console.error('Error handling request:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
  run().catch(console.dir);
});

module.exports = router;
