const express = require('express');

const emojis = require('./emojis');
const products = require('./products');
const menus = require('./menus');
const productsSwiper = require('./productsSwiper')
// const timers = require('./timers')

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API/V1',
  });
});

router.use('/emojis', emojis);

router.use('/products', products);

router.use('/menus', menus);

router.use('/productsSwiper', productsSwiper)

// router.use('/timers', timers)



module.exports = router;
