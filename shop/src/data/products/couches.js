const { descriptionLorem } = require('./template');

exports.couches = {
  ['green-couch']: {
    id: '0101',
    slug: 'green-couch',
    title: 'Green Couch',
    price: 359.99,
    description: descriptionLorem,
    category: 'chairs-and-couches',
    images: [
      {
        alt: 'Green Couch',
        id: '0101-01',
        product_id: '0101',
        src: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=500&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit',
      },
    ],
    tags: ['casual', 'cozy'],
    featured: false,
  },
  ['gray-couch']: {
    id: '0102',
    slug: 'gray-couch',
    title: 'Gray Couch',
    price: 359.99,
    description: descriptionLorem,
    category: 'chairs-and-couches',
    images: [
      {
        alt: 'Gray Couch',
        id: '0102-01',
        product_id: '0102',
        src: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=500&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit',
      },
    ],
    tags: ['casual', 'cozy'],
    featured: false,
  },
  ['vintage-couch']: {
    id: '0103',
    slug: 'vintage-couch',
    title: 'Vintage Couch',
    price: 359.99,
    description: descriptionLorem,
    category: 'chairs-and-couches',
    images: [
      {
        alt: 'Vintage Couch',
        id: '0103-01',
        product_id: '0103',
        src: 'https://images.unsplash.com/photo-1573866926487-a1865558a9cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyODAxNDM3Mg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500',
      },
    ],
    tags: ['antique'],
    featured: false,
  },
  ['yellow-couch']: {
    id: '0104',
    slug: 'yellow-couch',
    title: 'Yellow Couch',
    price: 359.99,
    description: descriptionLorem,
    category: 'chairs-and-couches',
    images: [
      {
        alt: 'Yellow Couch',
        id: '0104-01',
        product_id: '0104',
        src: 'https://images.unsplash.com/photo-1558211583-d26f610c1eb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjE5OTAyMzIz&ixlib=rb-1.2.1&q=80&w=500&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit',
      },
    ],
    tags: ['casual'],
    featured: false,
  },
};
