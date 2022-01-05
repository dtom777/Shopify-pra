const Favorite = require('../models/favorite');

// GET
exports.getFavorite = async (req, res, next) => {
  const { shop, userId, productId } = req.query;
  // 商品詳細ページのとき、productIdあり / 商品一覧ページのとき、productIdなし
  const query =
    productId !== 'undefined' ? { shop, userId, productId } : { shop, userId };

  try {
    const favorites = await Favorite.find(query);
    if (favorites.length !== 0) {
      res.status(200).json({ message: 'Fetched favorites!', favorites });
    } else {
      return res.status(200).json({
        message: `User ${userId} has not favorites yet.`,
        favorites: null,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send();
  }
};

// POST
exports.createFavorite = async (req, res, next) => {
  const { shop, userId, productId } = req.body;
  try {
    const favorite = new Favorite({
      shop,
      userId,
      productId,
    });
    await favorite.save();
    console.log('SAVE-RESULT', favorite);
    res.status(201).json({
      message: 'Created favorite!',
      favorite,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send();
  }
};

// DELETE
exports.deleteFavorite = async (req, res, next) => {
  const { shop, userId, productId } = req.body;
  try {
    const result = await Favorite.findOneAndDelete({
      shop,
      productId,
      userId,
    });
    if (result) {
      console.log('DELETE-RESULT', result);
      res.status(200).json({ message: 'Deleted favorite.' });
    } else {
      const error = new Error('Not find favorite.');
      error.statusCode = 404;
      throw error;
    }
  } catch (err) {
    console.log(err);
    res.status(500).send();
  }
};
