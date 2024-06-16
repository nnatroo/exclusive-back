const express = require('express');

const emojis = require('./emojis');
const products = require('./products');
const menus = require('./menus');
const productsswiper = require('./productsSwiper');
const timers = require ('./countdown');
const bestSellingProducts = require('./bestSellingProducts');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API/V1',
  });
});

router.use('/emojis', emojis);

router.use('/products', products);

router.use('/menus', menus);

router.use('/productsswiper', productsswiper)

router.use('/timers', timers)


router.use('/bestSellingProducts', bestSellingProducts);

module.exports = router;
