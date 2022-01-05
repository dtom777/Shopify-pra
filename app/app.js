const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const favoriteRoutes = require('./routes/favorite');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use('/favorite', favoriteRoutes);

mongoose
  .connect(process.env.MONGODB)
  .then((result) => {
    console.log('Mongoose connect success!');
    app.listen(8080);
  })
  .catch((err) => console.log(err));
