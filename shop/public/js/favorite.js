const handleFavorite = async (product, user, event) => {
  const baseUrl = 'http://localhost:8080/favorite';
  const { shop } = window.Shopify;
  const productId = product.id;
  const userId = user.id;

  if (!userId) {
    return;
  }

  // GET
  const getFavorite = async () => {
    // 商品詳細ページから商品一覧ページに戻るボタンで遷移した際、最新のデータを取得するためreloadする。
    window.onpageshow = event => {
      if (event.persisted) {
        window.location.reload();
      }
    };

    // 商品詳細ページのとき、フロントからproductId渡す / 商品一覧ページのとき、フロントからproductId渡さない
    const res = await fetch(
      `${baseUrl}?shop=${shop}&userId=${userId}&productId=${productId}`
    );
    const { favorites } = await res.json();
    console.log('FETCHED-DATA', favorites);

    // 商品詳細ページのとき
    if (productId && favorites) {
      document.getElementById(favorites[0].productId) &&
        document.getElementById(favorites[0].productId).classList.add('active');
      return;
    }

    // 商品一覧ページのとき
    if (!productId && favorites) {
      // favoritesのproductIdとフロントのproduct.idが一致するものはactiveを追加
      favorites.map(
        favorite =>
          document.getElementById(favorite.productId) &&
          document.getElementById(favorite.productId).classList.add('active')
      );
      return;
    }
  };

  // POST/DELETE
  const toggleFavorite = async () => {
    const favoriteElement = document.getElementById(productId);
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
