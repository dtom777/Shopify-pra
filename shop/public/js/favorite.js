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
      favoriteElement.classList.add('fbl-favorite');
      favoriteElement.classList.remove('fbl-no-favorite');
    } else {
      favoriteElement.classList.add('fbl-no-favorite');
      favoriteElement.classList.remove('fbl-favorite');
    }
  };

  // POST/DELETE
  const toggleFavorite = async () => {
    const favoriteClassName = document.getElementsByClassName('fbl-favorite');
    const body = {
      shop,
      userId,
      productId,
    };
    if (!favoriteClassName.length) {
      // POST
      try {
        await fetch(baseUrl, {
          method: 'POST',
          body: JSON.stringify(body),
          headers: { 'Content-Type': 'application/json' },
        });
        favoriteElement.classList.add('fbl-favorite');
        favoriteElement.classList.remove('fbl-no-favorite');
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
        favoriteElement.classList.add('fbl-no-favorite');
        favoriteElement.classList.remove('fbl-favorite');
      } catch (err) {
        console.log(err);
      }
    }
  };

  if (event === 'load') await getFavorite();
  if (event === 'click') await toggleFavorite();
};
