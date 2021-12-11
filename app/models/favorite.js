const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
  shop: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  productId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Favorite', favoriteSchema);
