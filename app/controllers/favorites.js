const Favorite = require('../models/favorite');

// GET
exports.getFavorites = async (req, res, next) => {
  const { shop, userId } = req.query;
  try {
    const favorites = await Favorite.find({ shop, userId });
    if (favorites.length !== 0) {
      res.status(200).json({ message: 'Fetched favorites!', favorites });
    } else {
      return res.status(200).json({
        message: `User ${userId} has not favorites yet.`,
        favorite: null,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send();
  }
};

// POST
exports.createFavorites = async (req, res, next) => {
  const reqData = req.body;
  console.log('REQUEST-DATA', req.body);
  const { shop, userId } = req.query;

  // DBからuserId,shopでデータを取得し、productIdにおいてreqDataと比較
  const fetchedData = await Favorite.find({ shop, userId });
  console.log('DB-DATA', fetchedData);

  if (Object.keys(reqData).length === 0 && fetchedData.length === 0) return;

  const getFavoritesDiff = (arrayA, arrayB) => {
    const same = arrayA.filter((_item) => {
      return arrayB.find((_item2) => _item2.productId === _item.productId);
    });
    const sameIds = same.map((_item) => _item.productId);

    return {
      // ①DBになくて、reqDataにあるものはDBに追加
      addData: arrayA.filter((_item) => {
        return !sameIds.includes(_item.productId);
      }),
      // ②DBにあって、reqDataにないものはDBから削除
      removeData: arrayB.filter((_item) => {
        return !sameIds.includes(_item.productId);
      }),
      // ③DBにあって、reqDataにあるものはDBにそのまま
      sameData: same,
    };
  };

  const { addData, removeData } = getFavoritesDiff(reqData, fetchedData);

  try {
    // ①DBに追加処理
    if (addData.length !== 0) {
      await addData.map(async (favorite) => {
        const newFavorite = new Favorite({
          shop,
          userId,
          productId: favorite.productId,
        });
        await newFavorite.save();
        console.log('ADD-RESULT', newFavorite);
      });
    }

    // ②DBから削除処理 ←ここのasync追加から
    if (removeData.length !== 0) {
      await removeData.map(async (favorite) => {
        const removeFavorite = await Favorite.findOneAndDelete({
          shop,
          userId,
          productId: favorite.productId,
        });
        console.log('REMOVE-RESULT', removeFavorite);
      });
    }

    res.status(201).json({
      message: 'Processing completed',
    });
  } catch (err) {
    console.log(err);
    res.status(500).send();
  }
};
