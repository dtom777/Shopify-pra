const Favorite = require('../models/favorite');

// GET
exports.getFavorite = async (req, res, next) => {
  const { shop, userId, productId } = req.query;

  try {
    const favorite = await Favorite.findOne({ shop, productId, userId });
    if (favorite) {
      res.status(200).json({ message: 'Fetched favorite!', favorite });
    } else {
      return res.status(200).json({
        message: `User ${userId} has not favorite ${productId} yet.`,
        favorite: null,
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
    const favorite = await Favorite.findOne({ shop, productId, userId });
    if (favorite) {
      const result = await Favorite.findOneAndDelete({
        shop,
        productId,
        userId,
      });
      console.log('REMOVE-RESULT', result);
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
