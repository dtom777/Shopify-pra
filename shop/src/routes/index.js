const express = require('express');
const router = express.Router();
const { heroImages, about } = require('../data/home');
const { categories, products } = require('../data/products');

router.get('/', (req, res, next) => {
  const session = req.session;

  const productsToSend = Object.values(products)
    .filter(p => p.featured)
    .slice(0, 3);

  res.render('pages/index', {
    title: 'Home',
    path: 'home',
    featuredProducts: productsToSend,
    heroImages,
    about,
    categories,
    user: session?.user,
  });
});

module.exports = router;
