const { shop } = window.Shopify;

const toggleFavorite = async (product, user) => {
  const productId = product.id;
  const userId = user.id;
  if (!userId) {
    return;
  }
  const body = {
    shop,
    userId,
    productId,
  };
  const favorite = await fetch(
    `http://localhost:8080/favorite?shop=${shop}&productId=${productId}&userId=${userId}`
  );
  const { status } = favorite;
  const element = document.getElementById('btn');
  const { className } = element;
  if (status === 200 && className === 'favorite') {
    try {
      await fetch('http://localhost:8080/favorite', {
        method: 'DELETE',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
      });
      element.classList.add('noFavorite');
      element.classList.remove('favorite');
    } catch (err) {
      console.log(err);
    }
  } else if (status === 200 && className === 'noFavorite') {
    // reloadの関係で見た目は非お気に入りだが、DBにdataはあるとき
    element.classList.add('favorite');
    element.classList.remove('noFavorite');
  } else {
    try {
      await fetch('http://localhost:8080/favorite', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
      });
      element.classList.add('favorite');
      element.classList.remove('noFavorite');
    } catch (err) {
      console.log(err);
    }
  }
};
