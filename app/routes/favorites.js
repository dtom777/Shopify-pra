const express = require('express');

const favoritesController = require('../controllers/favorites');

const router = express.Router();

// GET /favorites
router.get('/', favoritesController.getFavorites);

// POST /favorites
router.post('/', favoritesController.createFavorites);

module.exports = router;
