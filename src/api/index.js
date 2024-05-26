const express = require('express');

const emojis = require('./emojis');
const products = require('./products');
const categories = require('./category')
const menus = require('./menus');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API/V1',
  });
});

router.use('/emojis', emojis);

router.use('/products', products);

router.use('/categories', categories);

router.use('/menus', menus);

module.exports = router;
