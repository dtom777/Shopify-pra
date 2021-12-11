const { descriptionLorem } = require('./template');

exports.bedroom = {
  ['fancy-bed']: {
    id: '0201',
    slug: 'fancy-bed',
    title: 'Fancy Bed',
    price: 359.99,
    description: descriptionLorem,
    category: 'bedroom',
    images: [
      {
        alt: 'Fancy Bed',
        id: '0201-01',
        product_id: '0201',
        src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=500&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit',
      },
    ],
    tags: ['classy'],
    featured: true,
  },
  ['cozy-bed']: {
    id: '0202',
    slug: 'cozy-bed',
    title: 'Cozy Bed',
    price: 359.99,
    description: descriptionLorem,
    category: 'bedroom',
    images: [
      {
        alt: 'Cozy Bed',
        id: '0202-01',
        product_id: '0202',
        src: 'https://images.unsplash.com/photo-1616627561839-074385245ff6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTM5ODkwOQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500',
      },
    ],
    tags: ['cozy'],
    featured: false,
  },
  ['simple-bed']: {
    id: '0203',
    slug: 'simple-bed',
    title: 'Simple Bed',
    price: 359.99,
    description: descriptionLorem,
    category: 'bedroom',
    images: [
      {
        alt: 'Simple Bed',
        id: '0203-01',
        product_id: '0203',
        src: 'https://images.unsplash.com/photo-1588046130717-0eb0c9a3ba15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzODU1OTkyMA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500',
      },
    ],
    tags: ['casual', 'cozy'],
    featured: false,
  },
  ['special-bed']: {
    id: '0204',
    slug: 'special-bed',
    title: 'Special Bed',
    price: 359.99,
    description: descriptionLorem,
    category: 'bedroom',
    images: [
      {
        alt: 'Special Bed',
        id: '0204-01',
        product_id: '0204',
        src: 'https://images.unsplash.com/photo-1533633310920-cc9bf1e7f9b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=500&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit',
      },
    ],
    tags: ['classy'],
    featured: false,
  },
};
