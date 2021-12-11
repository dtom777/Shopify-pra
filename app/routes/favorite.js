const express = require('express');

const favoriteController = require('../controllers/favorite');

const router = express.Router();

// GET /favorite
router.get('/', favoriteController.getFavorite);

// POST /favorite
router.post('/', favoriteController.createFavorite);

// DELETE /favorite
router.delete('/', favoriteController.deleteFavorite);

module.exports = router;
