const createError = require('http-errors');
const express = require('express');
const router = express.Router();
const { products, categories, tags } = require('../data/products');
const config = require('../config');
const { getCurPageItems } = require('../utils/pagination');

const { perPage } = config;

router.get('/', (req, res) => {
  const session = req.session;

  res.render('pages/categories', {
    title: 'Category List',
    path: 'home/categories',
    categories,
    user: session?.user,
  });
});

router.get('/:category', (req, res, next) => {
  const session = req.session;

  const categoryId = req.params.category;

  if (!categories[categoryId]) {
    return next(createError(404));
  }

  const { filter, page = 1 } = req.query;

  const allProducts = Object.values(products);
  let cateProducts = allProducts.filter(p => p.category === categoryId);

  if (filter) {
    cateProducts = cateProducts.filter(p => p.tags.includes(filter));
  }

  const productsToSend = getCurPageItems(page, perPage, cateProducts);

  res.render('pages/products', {
    title: categories[categoryId]?.label,
    path: `home/categories/${categoryId}`,
    products: productsToSend,
    totalCount: cateProducts.length,
    filter,
    page: +page,
    perPage,
    categories,
    tags,
    user: session?.user,
  });
});

module.exports = router;
