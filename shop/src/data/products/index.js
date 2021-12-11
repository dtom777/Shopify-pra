const { chairs } = require('./chairs');
const { couches } = require('./couches');
const { bedroom } = require('./bedroom');
const { lighting } = require('./lighting');

exports.categories = {
  ['chairs-and-couches']: {
    id: 'chairs-and-couches',
    label: 'Chairs & Couches',
    image: {
      url: 'https://images.unsplash.com/photo-1615266876483-07e781e7befe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzODYzNDcxNg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500',
      alt: 'Chairs & Couches',
    },
  },
  ['bedroom']: {
    id: 'bedroom',
    label: 'Bedroom',
    image: {
      url: 'https://images.unsplash.com/flagged/photo-1573168710865-2e4c680d921a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=500&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit',
      alt: 'Bedroom',
    },
  },
  ['lighting']: {
    id: 'lighting',
    label: 'Lighting',
    image: {
      url: 'https://images.unsplash.com/photo-1581829479109-98ec4ab0d75a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNDI5MjU5OA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500',
      alt: 'Lighting',
    },
  },
};

exports.tags = [
  'office',
  'casual',
  'natural',
  'antique',
  'classy',
  'cozy',
  'oriental',
];

exports.products = {
  ...chairs,
  ...couches,
  ...bedroom,
  ...lighting,
};
