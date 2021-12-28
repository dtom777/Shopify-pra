const handleFavorite = async (product, user, event) => {
  const baseUrl = 'http://localhost:8080/favorite';
  const { shop } = window.Shopify;
  const productId = product.id;
  const userId = user.id;

  if (!productId || !userId) {
    return;
  }

  const favoriteElement = document.getElementById('fbl-favorite-btn');

  // GET
  const getFavorite = async () => {
    const res = await fetch(
      `${baseUrl}?shop=${shop}&productId=${productId}&userId=${userId}`
    );
    const { favorite } = await res.json();
    if (favorite) {
      favoriteElement.classList.add('active');
    } else {
      favoriteElement.classList.remove('active');
    }
  };

  // POST/DELETE
  const toggleFavorite = async () => {
    const favoriteElement = document.getElementById('fbl-favorite-btn');
    const body = {
      shop,
      userId,
      productId,
    };
    if (!favoriteElement.classList.contains('active')) {
      // POST
      try {
        await fetch(baseUrl, {
          method: 'POST',
          body: JSON.stringify(body),
          headers: { 'Content-Type': 'application/json' },
        });
        favoriteElement.classList.add('active');
      } catch (err) {
        console.log(err);
      }
    } else {
      // DELETE
      try {
        await fetch(baseUrl, {
          method: 'DELETE',
          body: JSON.stringify(body),
          headers: { 'Content-Type': 'application/json' },
        });
        favoriteElement.classList.remove('active');
      } catch (err) {
        console.log(err);
      }
    }
  };

  if (event === 'load') await getFavorite();
  if (event === 'click') await toggleFavorite();
};

// 商品一覧ページでのお気に入り処理
const handleFavorites = async (product, user, event) => {
  const baseUrl = 'http://localhost:8080/favorites';
  const { shop } = window.Shopify;
  const productId = product.id;
  const userId = user.id;

  // GET
  const getFavorites = async () => {
    // shop,userIdで一致データを全部取得し、localStorageに保存
    const res = await fetch(`${baseUrl}?shop=${shop}&userId=${userId}`);
    const { favorites } = await res.json();
    localStorage.setItem('favoriteItems', JSON.stringify(favorites));
    // localStorageに保管した後、重複を削除する
    const favoriteArray = JSON.parse(localStorage.getItem('favoriteItems'));
    const result = favoriteArray.filter(
      (element, index, self) =>
        self.findIndex(
          e => e.productId === element.productId && e.userId === element.userId
        ) === index
    );
    console.log('RESULT', result);
    localStorage.clear();
    localStorage.setItem('favoriteItems', JSON.stringify(result));

    // favoritesのうちproductIdが画面上のproduct.idが一致するものはactiveを追加
    result.map(
      favorite =>
        document.getElementById(favorite.productId) &&
        document.getElementById(favorite.productId).classList.add('active')
    );
  };

  // クリックしたプロダクトを一時的にlocalStorageに保存
  const saveFavoritesAtLocal = async () => {
    // ♥を赤にする
    const favoriteElement = document.getElementById(productId);
    favoriteElement.classList.add('active');

    const favoritesItems = JSON.parse(localStorage.getItem('favoriteItems'));
    console.log('登録情報', favoritesItems);

    // localStorageにfavoriteItemsがある時
    if (favoritesItems) {
      // 今回クリックしたお気に入り情報がすでにある時
      if (
        favoritesItems.some(
          element =>
            element.shop === shop &&
            element.productId === productId &&
            element.userId === userId
        )
      ) {
        console.log('すでにあるよ');
        // お気に入りから削除
        const newFavoriteItems = favoritesItems.filter(
          element =>
            !(
              element.shop === shop &&
              element.productId === productId &&
              element.userId === userId
            )
        );
        localStorage.setItem('favoriteItems', JSON.stringify(newFavoriteItems));
        favoriteElement.classList.remove('active');
        return;
      } else {
        // 今回クリックしたお気に入り情報がまだない時
        console.log('まだ登録されてないよ');
        favoritesItems.push({ shop, productId, userId });
        localStorage.setItem('favoriteItems', JSON.stringify(favoritesItems));
        return;
      }
    } else {
      // localStorageにfavoriteItemsがない時
      // 新規でお気に入り追加
      console.log('初めての追加だよ');
      let favoriteItems = [];
      favoriteItems.push({ shop, productId, userId });
      localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems));
    }
  };

  // POST beforeunload時に実行
  const toggleFavorites = async () => {
    const body = localStorage.getItem('favoriteItems');
    console.log('BODY', body);
    try {
      await fetch(baseUrl, {
        method: 'POST',
        body,
        headers: { 'Content-Type': 'application/json' },
      });
      console.log('処理完了');
      localStorage.clear();
    } catch (err) {
      console.log(err);
    }
  };

  if (event === 'load') await getFavorites();
  if (event === 'click') await saveFavoritesAtLocal();
  if (event === 'beforeunload') await toggleFavorites();
};
