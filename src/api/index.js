const express = require('express');
const emojis = require('./emojis');
const products = require('./products');
const menus = require('./menus');
const exploreProduct = require('./exploreProduct');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'API/V1' });
});

router.use('/emojis', emojis);
router.use('/products', products);
router.use('/menus', menus);
router.use('/exploreProduct', exploreProduct);

module.exports = router;
