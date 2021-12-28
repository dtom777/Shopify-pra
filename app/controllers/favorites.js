const Favorite = require('../models/favorite');

// GET
exports.getFavorites = (req, res, next) => {
  const { shop, userId } = req.query;
  Favorite.find({ shop, userId })
    .then((favorites) => {
      if (!favorites) {
        return res.status(200).json({
          message: `User ${userId} has not favorites yet.`,
          favorite: null,
        });
      }
      res.status(200).json({ message: 'Fetched favorites!', favorites });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

// POST
exports.createFavorites = (req, res, next) => {
  console.log('BODY', req.body);
  const favorites = req.body;

  // 全削除は他のやつuser分も消える

  // _idをもつデータは一度DBに登録があるため、favoritesから削除

  // 一回クリックで消しとったらどうする？ _idは使えない
  // dbからデータを取得し,shop,productId,userIdが一致するデータはfavoritesから削除

  if (favorites.length !== 0) {
    // DBにお気に入りを上書き
    favorites
      .filter((f) =>
        // まだ登録されていないdataだけ残す
        Favorite.find({
          $and: [
            { shop: { $ne: f.shop } },
            { userId: { $ne: f.userId } },
            { productId: { $ne: f.productId } },
          ],
        })
      )
      .then(
        (favorite) => console.log(favorite)
        // new Favorite({
        //   shop: favorite.shop,
        //   userId: favorite.userId,
        //   productId: favorite.productId,
        // })
      )
      // .save()
      .then((result) => {
        return res.status(201).json({
          message: 'Created favorites!',
          favorite: result,
        });
      })
      .catch((err) => {
        if (!err.statusCode) {
          return (err.statusCode = 500);
        }
        next(err);
      });
  }
};

// DELETE
exports.deleteFavorites = (req, res, next) => {};
