const express = require('express');

const emojis = require('./emojis');
const products = require('./products');
const menus = require('./menus');
const categories = require('./categories');
const swiper = require('./swiper');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API/V1',
  });
});

router.use('/emojis', emojis);

router.use('/products', products);

router.use('/menus', menus);

router.use('/categories', categories);

router.use('/swiper', swiper);

module.exports = router;
