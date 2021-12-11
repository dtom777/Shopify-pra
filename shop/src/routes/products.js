const createError = require('http-errors');
const express = require('express');
const router = express.Router();
const { products, categories, tags } = require('../data/products');
const config = require('../config');
const { getCurPageItems } = require('../utils/pagination');

const { perPage } = config;

/* GET home page. */
router.get('/', (req, res, next) => {
  const session = req.session;

  const { filter, page = 1 } = req.query;
  let allProducts = Object.values(products);

  if (filter) {
    allProducts = allProducts.filter(p => p.tags.includes(filter));
  }

  const productsToSend = getCurPageItems(page, perPage, allProducts);

  res.render('pages/products', {
    title: 'All Products',
    path: 'home/products',
    products: productsToSend,
    totalCount: allProducts.length,
    filter,
    page: +page,
    perPage,
    categories,
    tags,
    user: session?.user,
  });
});

router.get('/:slug', (req, res, next) => {
  const session = req.session;

  const product = products[req.params.slug];

  if (!product) {
    return next(createError(404));
  }

  res.render('pages/products/details', {
    title: 'Details',
    path: `home/products/${product.slug}`,
    product,
    categories,
    user: session?.user,
  });
});

module.exports = router;
