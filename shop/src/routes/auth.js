const express = require('express');
const router = express.Router();
const { categories } = require('../data/products');
const { users } = require('../data/users');

router.get('/login', (req, res) => {
  const session = req.session;

  if (session.user) {
    return res.redirect('/');
  }

  res.render('pages/auth/login', {
    title: 'Login',
    path: 'auth/login',
    categories,
    error: '',
    user: session?.user,
  });
});

router.post('/login', (req, res, next) => {
  const { name, password } = req.body;

  if (!users[name] || users[name].password !== password) {
    return res.render('pages/auth/login', {
      title: 'Login',
      path: 'auth/login',
      categories,
      error: 'Login Failed!',
    });
  }

  req.session.user = users[name];

  res.redirect('/');
});

router.post('/logout', (req, res) => {
  req.session.destroy();

  res.redirect('/');
});

module.exports = router;
