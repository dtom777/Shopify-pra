const Favorite = require('../models/favorite');

// GET
exports.getFavorite = (req, res, next) => {
  const { shop, userId, productId } = req.query;
  Favorite.findOne({ shop, productId, userId })
    .then((favorite) => {
      if (!favorite) {
        return res.status(200).json({
          message: `User ${userId} has not favorited ${productId} yet.`,
          favorite: null,
        });
      }
      res.status(200).json({ message: 'Fetched favorite!', favorite });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

// POST
exports.createFavorite = (req, res, next) => {
  const { shop, userId, productId } = req.body;
  const favorite = new Favorite({
    shop,
    userId,
    productId,
  });
  favorite
    .save()
    .then((result) => {
      res.status(201).json({
        message: 'Created favorite!',
        favorite: result,
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

// DELETE
exports.deleteFavorite = (req, res, next) => {
  const { shop, userId, productId } = req.body;
  Favorite.findOne({ shop, productId, userId })
    .then((favorite) => {
      if (!favorite) {
        const error = new Error('Not find favorite.');
        error.statusCode = 404;
        throw error;
      }
      return Favorite.findOneAndDelete({ shop, productId, userId });
    })
    .then((result) => {
      console.log('DELETE FAVORITE', result);
      res.status(200).json({ message: 'Deleted favorite.' });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
