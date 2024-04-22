const app = require('./app');
const Product = require('./models/product');
const port = process.env.PORT || 3000;

app.get('/products', async (req, res) => {
  const products = await Product.find()
  res.json(products);
})

app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Listening: http://localhost:${port}`);
  /* eslint-enable no-console */
});
